const { getAll, getById } = require('../Services/BooksService');

const getAllBooks = async (_req, res) => {
  try {
    const response = await getAll();
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBooksById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getById(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  };
};

module.exports = {
  getAllBooks,
  getBooksById,
};
