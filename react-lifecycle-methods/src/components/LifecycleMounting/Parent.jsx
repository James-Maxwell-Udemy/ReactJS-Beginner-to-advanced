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

  render() {
    console.log("👉 Parent: render");
    return (
      <div>
        <Child />
      </div>
    );
  }
}

export default Parent;
