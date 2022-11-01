const fs = require('fs').promises;
const path = require('path');

const PATH_NAME = path.resolve(__dirname, './trybeChoco.json');

const readCacauTrybe = async () => {
  try {
    const Allfiles =  await fs
    .readFile(PATH_NAME, 'utf-8');
  return JSON.parse(Allfiles);
  } catch (error) {
    console.error(error);
  };
};

const getAllChocos = async () => {
  const data = await readCacauTrybe();
  return data.chocolates;
}

const getAllBrands = async () => {
  const data = await readCacauTrybe();
  return data.brands;
}

const writeCacauTrybe = async (changed) => {
  try {
    await fs.writeFile(PATH_NAME, JSON.stringify(changed));
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAllChocos,
  getAllBrands,
  writeCacauTrybe,
}