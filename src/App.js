import React, { useState, useEffect } from "react";

import WordDisplay from "./components/WordDisplay.jsx";

import getWord from "./helpers/getWord.js";

import "./App.css";

function App() {
  const [word, setWord] = useState("");

  useEffect(() => {
    async function initalizeWord() {
      setWord(await getWord());
    }
    initalizeWord();
  }, []);

  return (
    <div className="App">
      <WordDisplay word={word} />
    </div>
  );
}

export default App;
