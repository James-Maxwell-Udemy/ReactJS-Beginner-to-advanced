import React, { Component } from "react";

class TextState extends Component {
  constructor() {
    super();

    this.state = {
      content: "What's up? 👋",
    };
  }

  replyMessage() {
    this.setState({
      content: "I am learning ReactJS 🚀",
    });
  }

  render() {
    const { content } = this.state;
    return (
      <div>
        <h1>{content}</h1>
        <button onClick={() => this.replyMessage()}>Click Me!</button>
      </div>
    );
  }
}

export default TextState;
