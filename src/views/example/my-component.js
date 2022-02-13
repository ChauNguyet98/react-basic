import React from "react";

class MyComponent extends React.Component {

    stage = {
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

    render() {
        let name = 'Selina';

        return (
            <>
                <div className="first">
                    {console.log('My name is ', name)}
                    <input value={this.stage.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    My name is {this.stage['name']}
                </div>

                <div className="second">
                    My youtube channel: {this.stage.channel}
                </div>
            </>
        );
    }
}

export default MyComponent;