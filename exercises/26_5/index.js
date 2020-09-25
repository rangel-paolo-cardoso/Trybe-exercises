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

const validaId = (req, res, next) => {
  const { id } = req.params;
  const recipeId = parseInt(id);
  if (recipeId === NaN) {
    return res.send('Id invalido');
  }
  next();
};

const encontraId = (id) => {
  const recipeIndex = recipes.findIndex((recipe) => recipe.id === id);
  if (recipeIndex) {
    return recipeIndex;
  }
  return null;
};

app.use(validaId);
app.delete('/recipe/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = encontraId(id);
  const deletedRecipe = recipes.splice(recipeIndex, 1)[0];
  deletedRecipe ? res.status(200).json(deletedRecipe) : res.status(204).send('Recipe not found');
});

app.listen(3000, () => console.log('Connection test OK'));
