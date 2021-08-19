import React, { Component } from "react";
import ChildComponent from "./ChildComponent.jsx";

class ParentComponent extends Component {
  constructor() {
    super();

    this.state = {
      parentComponent: "James",
    };

    this.helloParent = this.helloParent.bind(this);
  }

  helloParent(childParameter) {
    alert(
      `Hello ${this.state.parentComponent}. Welcome to React 🤝 ${childParameter}`
    );
  }

  render() {
    return <ChildComponent parentHandler={this.helloParent} />;
  }
}

export default ParentComponent;
