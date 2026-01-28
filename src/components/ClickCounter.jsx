import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div style={{ textAlign: "center", fontFamily: "Arial" }}>
        <h2>Click Counter</h2>
        <p>Count: {this.state.count}</p>
        <button
          onClick={this.incrementCount}
          style={{ padding: "10px 15px", cursor: "pointer" }}
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default ClickCounter;
