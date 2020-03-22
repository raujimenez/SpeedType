import React, { useState } from "react";

export default function TypeSpace(props) {
  const [userInput, setUserInput] = useState("");

  function handleInputChange(val) {
    setUserInput(val);
    props.setUserInput(val);
  }

  return (
    <input
      type="text"
      placeholder="type here"
      value={userInput}
      onChange={e => handleInputChange(e.target.value)}
      style={styles}
    />
  );
}

const styles = {
    border: 'None',
    borderBottom: 'solid 2px #eeeeee',
    fontSize: '20px',
    padding: '5px'
};
