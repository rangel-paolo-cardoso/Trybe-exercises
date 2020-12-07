const express = require('express');
const {
  pacientControllers,
} = require('./controllers');

const app = express();
const port = 3000;

app.get('/pacients', pacientControllers.listAllPacients);

app.get('/surgeries', pacientControllers.listAllPacientsAndTheirSurgeries);

app.get('/plans/:planId', pacientControllers.listPatientsByTheirPlans);

app.get('/', );

app.get('/', );

app.listen(port, () => console.log(`Example app listening on port port!`));
