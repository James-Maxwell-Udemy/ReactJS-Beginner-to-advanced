import React, { Component } from "react";
import NameList from "./NameList.jsx";
import { List } from "./List.js";

class ListRendering extends Component {
  constructor() {
    super();

    this.state = {
      List,
    };
  }

  render() {
    return (
      <div>
        {this.state.List.map((employee) => (
          <NameList
            key={employee.id}
            name={employee.name}
            email={employee.email}
          />
        ))}
      </div>
    );
  }
}

export default ListRendering;
