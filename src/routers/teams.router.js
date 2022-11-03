const express = require('express');
const { readFile, writeFile, getId } = require('../Functions/Readteams');
const { validateTeam, existingId } = require('../middlewares/teamsMiddlewares');

const router = express.Router();

router.get('/teams/:id', existingId, async (req, res) => {
  const item = req.item;
  res.status(200).json(item);
});

router.post('/teams', validateTeam, async (req, res) => {
  try {
    const { nome, sigla } = req.body;
    const id = await getId(); 
    const newTeam = { id, nome, sigla };
    const oldTeams = await readFile();
    const file = [...oldTeams, newTeam];
    await writeFile(file);
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(500).end();
  }
});

router.put('/teams/:id', existingId, validateTeam, async (req, res) => {
  const { id } = req.params;
  const { nome, sigla } = req.body;
  const teams = await readFile();
  const index = teams.findIndex((elem) => elem.id === Number(id));
  const changedTeam = { id: Number(id), nome, sigla };
  teams.splice(index, 1, changedTeam);
  await writeFile(teams);
  res.status(200).json(changedTeam);
});

router.delete('/teams/:id', existingId, async (req, res) => {
  const { id } = req.body;
  const teams = await readFile();
  const index = teams.findIndex((team) => team.id === Number(id));
  teams.splice(index, 1);
  await writeFile(teams);
  res.status(200).end();
});

module.exports = router;