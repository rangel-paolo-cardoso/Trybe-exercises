const express = require('express');
const app = express();

app.use(express.json());

app.put('/users/:name/:age', (request, response) => {
  const { name, age } = request.params; // Pega os parâmetros da url.
  return response.send({
    message: `Seu nome é ${name} e você tem ${age} anos de idade`
  });
});

app.listen(3000);
