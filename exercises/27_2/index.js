const express = require('express');
const bodyParser = require('body-parser');
require('dotenv');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', require('./controllers/productController'));

const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));