const express = require('express');
const bodyParser = require('body-parser');
const plantsAPI = require('./plants');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/plants', (_req, res) => {
  const plants = plantsAPI.getPlants();
  res.send(plants);
});

app.get('/plant/:id', (req, res) => {
  const plant = plantsAPI.getPlantById(Number(req.params.id));
  res.send(plant);
});

app.delete('/plant/:id', (req, res) => {
  const remainingPlants = plantsAPI.removePlantById(Number(req.params.id));
  res.send(remainingPlants);
});

app.put('/plant/:id', (req, res) => {
  const { id } = req.params;
  const plantsUpdated = plantsAPI.editPlant(Number(id), req.body);
  res.send(plantsUpdated);
});

app.post('/plant', (req, res) => {});

app.get('/sunny/:id', (req, res) => {});


app.listen(3000, () => console.log('Aplicação rodando!'));
