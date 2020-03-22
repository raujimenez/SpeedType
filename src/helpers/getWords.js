const fetch = require("node-fetch");

export default async function getWords(num) {
  const URL = "https://random-word-api.herokuapp.com/word?number=";
  const response = await fetch(URL.concat(num));
  return await response.json();
}
