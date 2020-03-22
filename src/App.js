import React, { useState, useEffect } from "react";

import WordDisplay from "./components/WordDisplay.jsx";
import TypeSpace from "./components/TypeSpace.jsx";

import getWord from "./helpers/getWord.js";

import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    async function initalizeWord() {
      setWord(await getWord());
    }
    initalizeWord();
  }, []);

  return (
    <div className="App">
      <WordDisplay word={word} userInput={userInput} />
      <TypeSpace setUserInput={setUserInput} />
    </div>
  );
}

export default App;
