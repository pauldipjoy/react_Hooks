import React, { useState } from "react";

const Test = (props) => {
  const myName = useState("");

  //*   console.log(testState[0]);
  //*  console.log(testState[1]);

  // if (testState[0] === ""){
  //   testState[1]("Hello World!");
  // }

  const changeState = ()=>{
    myName[1]("DIPJOY");
  }

  return (
    <div>
      <button onClick={changeState}>Show</button>
      <h1>{myName[0]}</h1>
    </div>
  );
};

export default Test;
