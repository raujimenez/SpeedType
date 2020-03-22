const fetch = require("node-fetch");

async function getWord() {
  const URL = "https://random-word-api.herokuapp.com/word?number=1";
  const response = await fetch(URL);
  return (await response.json())[0];
}
