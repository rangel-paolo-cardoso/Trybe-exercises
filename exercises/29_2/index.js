const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) =>
  res.send(`Exercício de PM2! Ambiente de: ${process.env.ENVIRONMENT}`)
);

app.listen(port, () =>
  console.log(`Example app listening on port port!`)
);
