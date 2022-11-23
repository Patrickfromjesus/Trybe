const { book } = require('../models');

const getAll = async () => {
  const books = await book.findAll();
  return books;
};

const getById = async (id) => {
  const books = await book.findByPk();
  return books;
};

module.exports = {
  getAll,
  getById,
};
