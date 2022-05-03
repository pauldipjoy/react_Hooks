import React, { useEffect, useState } from "react";

const Test = (props) => {
  // ARRAY DESTRUCTURING
  const [myName, setMyName] = useState("");
  const [myInfo, setMyInfo] = useState({
    a: "Hello",
    b: "World",
  });

  const changeState = () => {
    setMyName("DIPJOY");
    setMyInfo({
      ...myInfo,
      b: "React-hooks",
    });
  };

  // componentDidMount
  // componentDidUpdate
  useEffect(() => {
    console.log("MyInfo:", myInfo);
  }, [myInfo, myName]);

  return (
    <div>
      <button onClick={changeState}> Change </button>
      
    </div>
  );
};

export default Test;
