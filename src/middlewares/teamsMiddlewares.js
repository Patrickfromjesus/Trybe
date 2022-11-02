const { readFile } = require('../Functions/Readteams');

const validateTeam = (req, res, next) => {
  const validate = ['nome', 'sigla'];
  const body = Object.keys(req.body);
  if (validate.every((e) => body.includes(e))) {
    next();
  } else {
    res.status(400).end();
  }
};

const existingId = async (req, res, next) => {
  const { id } = req.params;
  const teams = await readFile();
  if (teams.some((e) => e.id === Number(id))) {
    req.item = teams.find((e) => e.id === Number(id));
    next();
  } else {
    res.status(404).send({ message: "Não encontrado o id" });
  }
};

module.exports = { existingId, validateTeam };
