const express = require('express');
const getCategories = require('./models/categories');
const app = express();
const geetCategories = require('./models/categories');

app.get('/', getCategories);

app.listen(3000, () => console.log('Aplicação iniciada!'));