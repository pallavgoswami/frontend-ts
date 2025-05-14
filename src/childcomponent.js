import React, { Component } from "react";
export default class ChildComponent extends Component {
  render() {
    return (
      <div>
        <h1>Child Component</h1>
        <p>Current Count: {this.props.count}</p>
        <button onClick={this.props.incrementCount}>Increment Count</button>
      </div>
    );
  }
}
