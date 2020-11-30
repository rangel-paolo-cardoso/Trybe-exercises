const express = require('express');
const {
  getBooks,
  getBooksByAuthor,
  getBookById,
  newBook,
  updateBook,
  deleteBook,
} = require('../controllers');

const router = express.Router();

router.delete('/book/:id', deleteBook);

router.get('/books', getBooks);

router.get('/books/:author', getBooksByAuthor);

router.get('/books/:id', getBookById);

router.post('/book', newBook);

router.put('/book/:id', updateBook);

module.exports = router;
