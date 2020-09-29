const getCategories = require('../models/categories');

async function listCategories(_req, res) {
  const categories = await getCategories();
  res.render('categories/index', { categories });
}

module.exports = listCategories;
