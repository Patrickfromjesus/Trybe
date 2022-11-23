const express = require('express');
const BooksController = require('./Controllers/BooksController');

const app = express();
app.use(express.json());

app.listen(3002, () => console.log('Está open na 3002!'));

app.get('/books', BooksController.getAllBooks);
app.get('/books/:id', BooksController.getBooksById);

module.exports = app;