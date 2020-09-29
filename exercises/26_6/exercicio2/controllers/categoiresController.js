const getCategories = require('../models/categories');
const { getRandomJokes, getJokesCategorized } = require('../models/jokes');

// lista todas as categorias
async function listCategories(_req, res) {
  const categories = await getCategories();
  res.render('categories/index', { categories });
}

// Random jokes
async function listRandomJokes(_req, res) {
  const joke = await getRandomJokes();
  res.render('jokes/index', { joke });
}

// Categorized jokes
async function listCategorizedJokes(req, res) {
  const { category } = req.params;
  const joke = await getJokesCategorized(category);
  res.render('jokes/index', { joke });
}

// redirecionamento da rota padrão
function redirectToCategories(_req, res) {
  res.redirect('/categories');
}

module.exports = {
  listCategories,
  listRandomJokes,
  listCategorizedJokes,
  redirectToCategories
};
