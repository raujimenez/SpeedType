import React, { useState } from "react";
import getWords from "../helpers/getWords.js";

export default function TypeSpace(props) {
  const [userInput, setUserInput] = useState("");
  const wordQueue = props.targetWords;
  async function handleInputChange(val) {
    const match = val.localeCompare(wordQueue[0]) === 0;
    if (!match) {
      setUserInput(val);
      props.setUserInput(val);
    } else {
      async function setWord() {
        if (wordQueue.length === 25) {
          props.setWordQueue(
            wordQueue
              .filter((val, index) => index !== 0)
              .concat(await getWords(50))
          );
        } else {
          props.setWordQueue(wordQueue.filter((val, index) => index !== 0));
        }
      }
      await setWord();
      setUserInput("");
      props.setUserInput("");
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
  padding: "5px",
  outline: "none",
  textAlign: "center",
  marginTop: "2vh",
  fontSize: "3vh"
};
