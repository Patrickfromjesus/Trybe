const fs = require('fs').promises;
const path = require('path');

const PATH_NAME = path.resolve(__dirname, '../Teams.json');

const readFile = async () => {
  const allTeams = await fs.readFile(PATH_NAME, 'utf-8');
  return JSON.parse(allTeams);
}

const getId = async () => {
  const teams = await readFile();
  return (teams.length + 1);
}

const writeFile = async (file) => {
  await fs.writeFile(PATH_NAME, JSON.stringify(file));
}

module.exports = {
  readFile,
  writeFile,
  getId,
};
