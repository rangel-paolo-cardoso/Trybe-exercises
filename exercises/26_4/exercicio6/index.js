const express = require('express');
// const simpsonsFile = require('./simpsons.json');
const app = express();
const routeSimpsons = require('./readSimpsons');

app.use('/simpsons', routeSimpsons);

app.get((err, request, response, next) =>
  response.status(500).send(`Algo deu errado! Mensagem: ${err.message}`)
);

app.listen(3000, () => console.log('Aplicação iniciada.'));
