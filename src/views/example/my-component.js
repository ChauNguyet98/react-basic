import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Lalisa',
        channel: 'Selina Vlog',
    };

    /**
     * JSX => return a block (a tag in the outermost)
     * fragment
     * <React.Fragment></React.Fragment> is the same <></>
     */

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleClickButton = () => {
        alert('click me');
    }

    render() {
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    My name is {this.state['name']}
                </div>

                <div className="second">
                    My youtube channel: {this.state.channel}
                </div>

                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        );
    }
}

export default MyComponent;