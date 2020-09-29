const getCategories = require('../models/categories');

async function listCategories(_req, res) {
  const categories = await getCategories();
  res.render('categories/index', { categories });
}

function redirectToCategories(_red, res) {
  res.redirect('/categories');
}

module.exports = {
  listCategories,
  redirectToCategories
};
