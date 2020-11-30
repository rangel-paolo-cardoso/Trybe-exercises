const express = require('express');
const {
  getBooks,
  getBookById,
  newBook,
  updateBook,
  deleteBook,
} = require('../controllers');

const router = express.Router();

router.delete('/book/:id', deleteBook);

router.get('/books', getBooks);

router.get('/books/:id', getBookById);

router.post('/book', newBook);

router.put('/book', updateBook);

module.exports = router;
