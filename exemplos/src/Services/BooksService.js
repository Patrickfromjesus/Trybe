const { book } = require('../models');

const getAll = async () => {
  const books = await book.findAll();
  return books;
};

const getById = async (id) => {
  const books = await book.findByPk();
  return books;
};

const create = async ({ title, author, pageQuantity }) => {
  const [books] = await book.bulkCreate([
    {
      title,
      author,
      pageQuantity,
    }
  ]);

  return books;
}

module.exports = {
  getAll,
  getById,
  create,
};
