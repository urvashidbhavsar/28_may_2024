import React from "react";

class StateEx extends React.Component {
    constructor() {
        super()
        this.state = { langauge: "Angular" }
    }

    handleEvent = () => {
        this.setState({ langauge: "React" })
    }

    render() {
        return (
            <>
                <button onClick={this.handleEvent}>Click Here</button>
                <p>{this.state.langauge}</p>
            </>
        )
    }
}
export default StateEx;