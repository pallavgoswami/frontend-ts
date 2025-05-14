import React, { Component } from "react";
import ChildComponent from "./childcomponent";
export default class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment Count</button>
        <ChildComponent count={this.state.count} />
      </div>
    );
  }
}
