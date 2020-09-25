const express = require('express');
const app = express();

app.use(express.json());

app.post('/hello', (request, response) => {
  const { name, age } = request.body;
  if (age > 17) {
    return response.status(200).send({
      message: `Hello, ${name}`
    });
  };
  return response.status(401).send({
    message: 'Unauthorized'
  });
});

app.listen(3000);
