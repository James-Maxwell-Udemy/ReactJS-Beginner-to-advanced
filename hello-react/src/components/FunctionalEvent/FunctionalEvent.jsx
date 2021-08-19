import React from "react";

const FunctionalEvent = () => {
  const clickEvent = () => {
    console.log("Click from the functional component 👇");
  };

  return (
    <div>
      <h1>Button from FunctionalEvent component</h1>
      <button onClick={clickEvent}>Click Me!</button>
    </div>
  );
};

export default FunctionalEvent;
