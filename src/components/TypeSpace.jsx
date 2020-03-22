import React, { useState } from "react";
import getWord from "../helpers/getWord.js";

export default function TypeSpace(props) {
  const [userInput, setUserInput] = useState("");

  function handleInputChange(val) {
    if (val.localeCompare(props.targetWord)) {
      setUserInput(val);
      props.setUserInput(val);
    } else {
      setUserInput("");
      props.setUserInput("");
      async function setWord() {
        props.setWord(await getWord());
      }
      setWord();
    }
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
  border: "None",
  borderBottom: "solid 2px #eeeeee",
  fontSize: "20px",
  padding: "5px"
};
