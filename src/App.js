import React, { useState, useEffect } from "react";

import WordDisplay from "./components/WordDisplay.jsx";
import TypeSpace from "./components/TypeSpace.jsx";

import getWords from "./helpers/getWords.js";

import "./App.css";

function App() {
  const [wordQueue, setWordQueue] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    async function initalizeWord() {
      setWordQueue(await getWords(50));
    }
    initalizeWord();
  }, []);

  return (
    <div className="App" style={AppStyles}>
      <WordDisplay
        word={wordQueue.length > 0 ? wordQueue[0] : ""}
        userInput={userInput}
      />
      <TypeSpace
        setUserInput={setUserInput}
        targetWords={wordQueue}
        setWordQueue={setWordQueue}
      />
    </div>
  );
}

const AppStyles = {
  textAlign: "center"
};

export default App;
