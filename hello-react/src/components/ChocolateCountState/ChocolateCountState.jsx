import React, { Component } from "react";

class ChocolateCountState extends Component {
  constructor() {
    super();
    this.state = {
      chocolateCount: 0,
    };
  }

  addChocolate() {
    // this.state.chocolateCount = this.state.chocolateCount + 1;
    // NEVER DO THIS. THIS MODIFIES THE STATE DIRECTLY. INSTEAD USE SETSTATE.
    // this.setState(
    //   {
    //     chocolateCount: this.state.chocolateCount + 1,
    //   },
    //   () => console.log("Console Number: ", this.state.chocolateCount)
    // );

    this.setState((prevState) => ({
      chocolateCount: prevState.chocolateCount + 1,
    }));
    console.log(this.state.chocolateCount);
  }

  subChocolate() {
    this.setState(
      {
        chocolateCount: this.state.chocolateCount - 1,
      },
      () => console.log("Console Number: ", this.state.chocolateCount)
    );
    console.log(this.state.chocolateCount);
  }

  addThreeChocolates() {
    this.addChocolate();
    this.addChocolate();
    this.addChocolate();
  }

  render() {
    return (
      <div>
        <h1>🍫 Count: {this.state.chocolateCount}</h1>
        <button onClick={() => this.addThreeChocolates()}>Add</button>
        <button onClick={() => this.subChocolate()}>Sub</button>
      </div>
    );
  }
}

export default ChocolateCountState;
