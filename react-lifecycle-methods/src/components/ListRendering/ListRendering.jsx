import React, { Component } from "react";
import NameList from "./NameList.jsx";
// import { Employees } from "./Employees.js";

class ListRendering extends Component {
  constructor() {
    super();

    this.state = {
      Employees: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ Employees: users }));
  }

  render() {
    return (
      <div>
        {this.state.Employees.map((employee) => (
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
