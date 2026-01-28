import React, { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        };
    }

    componentDidMount() {
        // update time every second
        this.interval = setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() });
        }, 1000);
    }

    componentWillUnmount() {
        // clear interval when component unmounts
        clearInterval(this.interval);
    }

    render() {
        return (
            <div style={{ textAlign: "center", fontFamily: "Arial" }}>
                <h2>Current Time</h2>
                <p style={{ fontSize: "1.5rem" }}>{this.state.time}</p>
            </div>
        );
    }
}

export default Timer;
