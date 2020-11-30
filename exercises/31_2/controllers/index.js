const { Book } = require('../models');

const getBooks = async (_req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books)
  } catch (error) {
    console.log('GetBooks: ', error.message);
    res.status(500).send({ message: 'Algo deu errado!' });
  }
};

const getBookById = async (req, res) => {
  try {
    const books = await Book.findByPk(req.params.id);
    res.status(200).json(books);
  } catch (error) {
    console.log('Get One Book: ', error.message);
    res.status(500).send({ message: 'Algo deu errado!' });
  }
};

const newBook = async (req, res) => {
  try {
    console.log(req.body);
    const { title, author, pageQuantity = 0 } = req.body;
    const books = await Book.create({
      title,
      author,
      pageQuantity,
    });
    res.status(200).json(books);
  } catch (error) {
    console.log('Insert Book: ', error.message);
    res.status(500).send({ message: 'Algo deu errado!' });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const result = await Book.update({
      title,
      author,
      pageQuantity,
    },{
      where: { id: req.params.id }
    });
    res.status(200).json(result);
  } catch (error) {
    console.log('Update Book: ', error.message);
    res.status(500).send({ message: 'Algo deu errado!' });
  }
};

const deleteBook = async (req, res) => {
  try {
    const bookToDelete = await Book.findByPk(req.params.id);
    await bookToDelete.destroy();
    res.status(200).json(bookToDelete);
  } catch (error) {
    console.log('Delete Book: ', error.message);
    res.status(500).send({ message: 'Algo deu errado!' });
  }
};

module.exports = {
  getBooks,
  getBookById,
  newBook,
  updateBook,
  deleteBook,
};
