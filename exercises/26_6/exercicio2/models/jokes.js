const axios = require('axios');

async function getRandomJokes() {
  const randomJokesURL = 'https://api.chucknorris.io/jokes/random';
  return (await axios(randomJokesURL)).data;
}

async function getJokesCategorized(category) {
  const categorizedJokesURL = `https://api.chucknorris.io/jokes/random?category=${category}`;
  return (await axios(categorizedJokesURL)).data;
}

module.exports = {
  getRandomJokes,
  getJokesCategorized
};
