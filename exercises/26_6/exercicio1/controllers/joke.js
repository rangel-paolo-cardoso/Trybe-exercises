const getJokes = require('../models/joke');

async function listJokes(_req, res) {
  await getJokes();
}