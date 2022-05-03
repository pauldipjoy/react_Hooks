import React, { useState } from "react";

const Test = (props) => {
  
  //* ARRAY DESTRUCTURING
  const [myName , setMyName] = useState("");
  const [myInfo , setMyInfo] = useState({});


  //*   console.log(testState[0]);
  //*  console.log(testState[1]);

  // if (testState[0] === ""){
  //   testState[1]("Hello World!");
  // }

  const changeState = () =>{
    setMyName("DIPJOY");
    setMyInfo({
      age: "27",
      address: "KOLKATA INDIA"
    })
  }

  return (
    <div>
      <button onClick={changeState}>Show</button>
      <h1>NAME: {myName}</h1>
      <h1>AGE: {myInfo.age}</h1>
      <h1>ADDRESS: {myInfo.address}</h1>
    </div>
  );
};

export default Test;
