const express = require("express");
const fs = require('fs').promises;
const path = require('path');
const { readFile, writeFile } = require('../Functions/Readteams');
const { validateTeam, existingId } = require('../middlewares/teamsMiddlewares');

const PATH_NAME = path.resolve(__dirname, '../Teams.json');
const app = express();
let nextId = 3;

/* [
  {
    "id": 1,
    "nome": "São Paulo Futebol Clube",
    "sigla": "SPF"
  },
  {
    "id": 2,
    "nome":"Sociedade Esportiva Palmeiras",
    "sigla": "PAL"
  }
] */

app.use(express.json());

app.get('/teams/:id', existingId, async (req, res) => {
  const item = req.item;
  res.status(200).json(item);
});

app.post('/teams', validateTeam, async (req, res) => {
  try {
    const { nome, sigla } = req.body;
    const newTeam = { id: nextId, nome, sigla };
    const oldTeams = await readFile();
    const file = { teams: [...oldTeams, newTeam] };
    await writeFile(file);
    res.status(201).json(newTeam);
    nextId += 1;
  } catch (error) {
    res.status(500).end();
  }
});

app.put('/teams/:id', validateTeam, async (req, res) => {
  const { id } = req.params;
  const { nome, sigla } = req.body;
  const teams = await readFile();
  const index = teams.findIndex((elem) => elem.id === Number(id));
  const changedTeam = { id: Number(id), nome, sigla };
  teams.splice(index, 1, changedTeam);
  await writeFile(teams);
  res.status(200).json(changedTeam);
});

module.exports = app;
