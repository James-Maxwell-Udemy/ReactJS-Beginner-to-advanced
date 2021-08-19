import React, { Component } from "react";

class BindEvent extends Component {
  constructor() {
    super();

    this.state = {
      message: "I am learning ReactJS",
    };

    // this.messageHandler = this.messageHandler.bind(this)
  }

  // messageHandler() {
  //   this.setState({
  //     message: "ReactJS is amazing 🚀",
  //   });
  //   console.log(this);
  // }

  messageHandler = () => {
    this.setState({
      message: "ReactJS is amazing 🚀",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.messageHandler.bind(this)}>Click Me!</button> */}
        {/* <button onClick={() => this.messageHandler()}>Click Me!</button> */}
        <button onClick={this.messageHandler}>Click Me!</button>
      </div>
    );
  }
}

export default BindEvent;
