import React from "react";

const HelloJS = () => {
  return React.createElement(
    "div",
    { className: "js-component", style: { backgroundColor: "crimson" } },
    // "<h1>Hello from JS. I am the JS component!</h1>"
    React.createElement("h1", null, "Hello from JS. I am the JS component!")
  );
};

export default HelloJS;
