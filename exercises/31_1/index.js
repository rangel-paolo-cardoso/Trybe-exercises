const express = require('express');
const bodyParser = require('body-parser');
const plantsAPI = require('./plants');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/plants', (req, res) => {});

app.get('/plant/:id', (req, res) => {});

app.delete('/plant/:id', (req, res) => {});

app.post('/plant/:id', (req, res) => {});

app.post('/plant', (req, res) => {});

app.get('/sunny/:id', (req, res) => {});


app.listen(3000, () => console.log('Aplicação rodando!'));
