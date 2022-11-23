const { getAll, getById, create, update, remove } = require('../Services/BooksService');

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

const createBook = async (req, res) => {
  try {
    const { body } = req;
    const response = await create(body);
    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const response = await update(id, body);
    return res.status(204).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const removeBook = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await remove(id);
    return res.status(204).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBooks,
  getBooksById,
  createBook,
  updateBook,
  removeBook,
};
