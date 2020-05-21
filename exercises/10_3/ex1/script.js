const resposta = document.getElementById("jokeContainer");
const API_URL = "https://icanhazdadjoke.com/";

const fetchJoke = (obj) => resposta.innerHTML = `${obj.joke}`;

const myObject = {
  method: "GET",
  headers: { Accept: "application/json" },
};

fetch(API_URL, myObject)
  .then((response) => response.json())
  .then((data) => fetchJoke(data));

window.onload = () => fetchJoke();
