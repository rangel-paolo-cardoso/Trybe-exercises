const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const productController = require('./controllers/productController');
require('dotenv');

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', productController);

const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));
