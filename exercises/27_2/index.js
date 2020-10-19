const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv');

// const productController = require('./controllers/productController');
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', require('./controllers/productController'));
// app.use('/products', productController);

const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));
