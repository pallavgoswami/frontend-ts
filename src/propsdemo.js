import React from "react";
export default class PropsDemo extends React.Component {
  render() {
    return (
      <div>
        <h2>You are inside parent component</h2>
        <Child name="User" userId="5555" />
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    return (
      <div>
        <h3>Name is: {this.props.name}</h3>
        <h3>User ID is: {this.props.userId}</h3>
      </div>
    );
  }
}
