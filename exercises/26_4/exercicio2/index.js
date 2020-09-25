const express = require('express');
const app = express();

app.get('/ping', (resquest, response) =>
  response.status(200).send({ message: "Pong!" })
);

app.listen(3000);
