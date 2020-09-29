const express = require('express');
const app = express();
const {
  listCategories,
  redirectToCategories,
  listRandomJokes,
  listCategorizedJokes
} = require('./controllers/categoiresController');

// define a engine de visualização para o ejs
app.set('view engine', 'ejs');

// define onde se localizam as views da aplicação
app.set('views', './views');

// define que controller será usado na rota /categoires
app.get('/categories', listCategories);

// exibe jokes aleatórias
app.get('/jokes', listRandomJokes);

// exibe jokes por categoria
app.get('/jokes/:category', listCategorizedJokes);

// define que na rota padrão o uso da função redirectToCategories
// redireciona para a rota de /categoires
app.get('/', redirectToCategories);

app.listen(3000, () => console.log('Aplicação iniciada!'));
