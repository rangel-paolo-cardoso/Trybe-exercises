const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/list-products', async (_req, res, _next) => {
  try {
    const products = await ProductModel.getAll();
    if (!products) {
      res.status(404).json({ message: 'Produtos não encontrados!' });
    }

    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    console.log(error.name);
  }
});

router.get('/get-by-id/:id', async (req, res, _next) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product) {
    res.status(404).json({ message: 'Produto não encontrado!' });
  }

  res.status(200).json(product);
});

router.post('/add-user', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const newProduct = await ProductModel.add(name, brand);
    if (!newProduct) {
      res.status(417).json({ message: 'Não foi possível adicionar novo produto!' });
    }

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado!' });
  }
});

router.delete('/delete-user/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  try {
    if (Object.entries(products).length === 0) {
      res.status(417).json({ message: 'Não foi possível excluír o produto!' });
    }
  
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado!' });
  }
});

router.put('/update-user/:id', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const products = await ProductModel.update(req.params.id, name, brand);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao tentar atualizar dados do produto!' });
  }
});

module.exports = router;
