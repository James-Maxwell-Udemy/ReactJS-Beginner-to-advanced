import React from "react";

const NameList = ({ name, email }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Email: {email}</h2>
      <br />
      <hr />
    </div>
  );
};

export default NameList;
