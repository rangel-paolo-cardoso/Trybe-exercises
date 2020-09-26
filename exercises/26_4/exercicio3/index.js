const express = require('express');
const app = express();

app.use(express.json());

app.post('/hello', (request, response) => {
  const { name } = request.body;
  return response.status(200).send({
    message: `Hello ${name}`
  });
});

app.listen(3000, () => console.log('Aplicação iniciou!'));
