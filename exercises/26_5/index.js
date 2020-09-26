const express = require('express');
const app = express();

const recipes = [
  {
    id: 12345,
    name: 'farofa de bacon',
    ingredientes: ['farofa', 'bacon'],
  },
  {
    id: 12346,
    name: 'ovo mexido',
    ingredientes: ['ovo'],
  },
];

const validaId = (request, response, next) => {
  const { id } = request.params;
  const recipeId = parseInt(id);
  if (recipeId === NaN) return response.send('Id invalido');
  next();
};

const encontraId = (id) => recipes.findIndex((recipe) => recipe.id === id);

app.use(validaId);

app.delete('/recipe/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = encontraId(id);
  const deletedRecipe = recipes.splice(recipeIndex, 1)[0];
  deletedRecipe ? res.status(200).json(deletedRecipe) : res.status(204).send('Recipe not found');
});

app.listen(3000, () => console.log('Connection test OK'));
