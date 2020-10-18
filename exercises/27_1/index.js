const express = require('express');
const app = express();
require('dotenv').config();

const authorController = require('./controllers/authorController');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/authors', authorController.listAuthors);
app.get('/authors/:id', authorController.showAuthor);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Aplicação iniciada na porta ${PORT}`)
);
