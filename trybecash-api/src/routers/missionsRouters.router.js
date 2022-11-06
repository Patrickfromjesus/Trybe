const express = require('express');
const { insert, read, update, remove } = require('../db/crudMissions');
const { validatePut } = require('../middlewares/missionsMiddleware');

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

missionsRouter.post('/', async (req, res) => {
  const mission = req.body;
  const [result] = await insert(mission);
  res.status(201).json(result.insertId);
});

missionsRouter.put('/:id', validatePut, async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const [result] = await update(body, id);
  res.status(200).json(result);
});

missionsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const [result] = await remove(id);
  res.status(204).json(result);
});

module.exports = missionsRouter;
