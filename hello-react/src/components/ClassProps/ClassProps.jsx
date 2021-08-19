import React, { Component } from "react";

class ClassProps extends Component {
  render() {
    const { personName, age } = this.props;
    return (
      <h1>
        Hello I am {personName} and {age}
      </h1>
    );
  }
}

export default ClassProps;
