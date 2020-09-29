const getJokes = require('../models/joke');

async function listJokes(_req, res) {
  const joke = await getJokes();
  return res.render('jokeView.ejs', { joke });
}

module.exports = listJokes;