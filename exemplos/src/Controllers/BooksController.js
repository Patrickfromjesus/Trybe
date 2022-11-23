const { getAll } = require('../Services/BooksService');

const getBooks = async (_req, res) => {
  try {
    const response = await getAll();
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBooks,
};
