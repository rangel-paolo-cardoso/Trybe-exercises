const express = require('express');
const {
  pacientControllers,
} = require('./controllers');

const app = express();
const port = 3000;


app.get('/pacients', pacientControllers.listAllPacients);

app.get('/', (req, res) => {});

app.get('/', (req, res) => {});

app.get('/', (req, res) => {});

app.get('/', (req, res) => {});

app.listen(port, () => console.log(`Example app listening on port port!`));
