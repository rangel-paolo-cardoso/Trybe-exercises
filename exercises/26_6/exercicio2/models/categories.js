const axios = require('axios');

const categoriesURL = 'https://api.chucknorris.io/jokes/categories';

async function getCategories() {
  const categoires = (await axios(categoriesURL)).data;
  console.log(categoires);
}

module.exports = getCategories;
