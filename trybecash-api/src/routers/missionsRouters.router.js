const express = require('express');
const { insert, read, update, remove } = require('../db/crudMissions');
const { validatePutPost } = require('../middlewares/missionsMiddleware');

const missionsRouter = express.Router();

missionsRouter.get('/', async (_req, res) => {
  const [result] = await read();
  res.status(200).json(result);
});

missionsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const [result] = await read(id);
  res.status(200).json(result);
});

missionsRouter.post('/', validatePutPost, async (req, res) => {
  const mission = req.body;
  const [result] = await insert(mission);
  res.status(201).json({ message: `Usuário ${result.insertId} criado com sucesso!` });
});

missionsRouter.put('/:id', validatePutPost, async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const [result] = await update(body, id);
  res.status(200).json(result.changedRows);
});

missionsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const [result] = await remove(id);
  res.status(204).json(result);
});

module.exports = missionsRouter;
