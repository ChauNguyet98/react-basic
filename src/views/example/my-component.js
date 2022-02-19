import React from "react";
import ChildComponent from "./child-component";

class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
    };

    /**
     * JSX => return a block (a tag in the outermost)
     * fragment
     * <React.Fragment></React.Fragment> is the same <></>
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
        console.log('>>> call render: ', this.state);
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    /><br /><br />
                    <input type="submit"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>

                <ChildComponent name={'child-one'} />
                <ChildComponent name={'child-two'} />
                <ChildComponent name={'child-three'} />
            </>
        );
    }
}

export default MyComponent;