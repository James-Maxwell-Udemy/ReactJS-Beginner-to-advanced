import React, { Component } from "react";
import Child from "./Child.jsx";

class Parent extends Component {
  constructor() {
    super();

    this.state = {
      name: "James",
    };

    console.log("👉 Parent: constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("👉 Parent: getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("👉 Parent: componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("👉 Parent: shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("👉 Parent: getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("👉 Parent: componentDidUpdate");
  }

  stateChange = () => {
    this.setState({
      name: "Lead instructor at DevArsenal ",
    });
  };

  render() {
    console.log("👉 Parent: render");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.stateChange}>State Change</button>
        <Child />
      </div>
    );
  }
}

export default Parent;
