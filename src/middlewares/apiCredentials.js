const fs = require('fs').promises;
const path = require('path');

const PATH = path.resolve(__dirname, '../../authData.json');

const apiCredentials = async (req, res, next) => {
  const token = req.header('X-API-TOKEN');
  const authdata = await fs.readFile(PATH);
  const data = JSON.parse(authdata);
  if (Object.keys(data).some((e) => token === e)) {
    next();
  } else {
    res.sendStatus(401);
  }
}

module.exports = apiCredentials;