import React from "react";

class ChildComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
    };

    /**
     * Nesting Components => only transfer data from parent to child (not from child to parent)
     */

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        });
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('>>>> check data input: ', this.state);
    }

    render() {
        console.log('>>> check props: ', this.props);
        // const name = this.props.name;
        // const age = this.props.age;

        const { name, age } = this.props;
        return (
            <>
                <div>
                    Child Component: {name} - {age}
                </div>
            </>
        );
    }
}

export default ChildComponent;