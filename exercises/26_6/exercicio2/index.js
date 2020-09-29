const express = require('express');
const app = express();
const listCategories = require('./controllers/categoiresController');

// define a engine de visualização para o ejs
app.set('view engine', 'ejs');

// define onde se localizam as views da aplicação
app.set('views', './views');

// define que controller será usado na rota /categoires
app.get('/categories', listCategories);

app.listen(3000, () => console.log('Aplicação iniciada!'));
