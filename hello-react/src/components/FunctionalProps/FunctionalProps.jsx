import React from "react";

const FunctionalProps = (props) => {
  // console.log(props);
  const { personName, age } = props;
  return (
    <div>
      <h1>
        Hello, I am {personName}, and {age} years old.
      </h1>
      {/* {props.children} */}
    </div>
  );
};

export default FunctionalProps;
