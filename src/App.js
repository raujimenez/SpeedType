import React, { useState } from "react";

import WordDisplay from "./components/WordDisplay.jsx";

import "./App.css";

function App() {
  const [word, setWord] = useState("");

  return (
    <div className="App">
      <WordDisplay word={word} />
    </div>
  );
}

export default App;
