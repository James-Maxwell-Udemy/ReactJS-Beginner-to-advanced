import React from "react";

const ChildComponent = ({ parentHandler }) => {
  return (
    <div>
      <h1>Say hello to React 🤝</h1>
      <button onClick={() => parentHandler("course")}>Hello</button>
    </div>
  );
};

export default ChildComponent;
