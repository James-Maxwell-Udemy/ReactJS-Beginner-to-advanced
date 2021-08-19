import React, { Component } from "react";

class Child extends Component {
  constructor() {
    super();

    this.state = {
      name: "James",
    };

    console.log("👉 Child: constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("👉 Child: getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("👉 Child: componentDidMount");
  }

  render() {
    console.log("👉 Child: render");
    return (
      <div>
        <h1></h1>
      </div>
    );
  }
}

export default Child;
