const axios = require('axios');

const categoriesURL = 'https://api.chucknorris.io/jokes/categories';

async function getCategories() {
  return categoires = (await axios(categoriesURL)).data;
}

module.exports = getCategories;
