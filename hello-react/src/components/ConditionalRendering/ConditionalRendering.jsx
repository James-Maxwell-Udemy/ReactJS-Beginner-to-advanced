import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor() {
    super();

    this.state = {
      visible: true,
    };
  }

  render() {
    //     if (this.state.visible) {
    //       return <h1>🌞</h1>;
    //     } else {
    //       return <h1>🌚</h1>;
    //     }
    //   }

    return (
      <div>
        {this.state.visible ? <h1>🌞</h1> : <h1>🌚</h1>}
        <button onClick={() => this.setState({ visible: true })}>DAY</button>
        <button onClick={() => this.setState({ visible: false })}>NIGHT</button>
      </div>
    );
  }
}

export default ConditionalRendering;
