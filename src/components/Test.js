import React, { useState } from "react";

const Test = (props) => {
  const testState = useState("");

  //*   console.log(testState[0]);
  //*  console.log(testState[1]);

  if (testState[0] === ""){
    testState[1]("Hello World!");
  }

  return (
    <div>
      <h1>{testState[0]}</h1>
    </div>
  );
};

export default Test;
