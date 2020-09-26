const express = require('express');
const app = express();
const router = express.Router();

const authMiddleWare = (request, response, next) => {
  if (request.headers.authorization) {
    next();
  } else {
    response.status(401);
    response.send({ message: 'Token inválido!' });
  }
};

const logRequestMiddleWare = (request, response, next) => {
  console.log(`${request.method} ${request.path}`);
  next();
};

app.use(logRequestMiddleWare);
router.use(authMiddleWare);

router.get('/hello', (request, response) =>
  response.send({ message: 'Olá! Seja bem-vindo!  ' })
);

app.use('/secure', router);

app.get('/', (request, response) =>
 response.send('Hello World!')
);

app.listen(3000, () => console.log('Iniciei o listener.'));
