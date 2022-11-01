const fs = require('fs').promises;
const path = require('path');

const readCacauTrybe = async () => {
  try {
    const Allfiles =  await fs
    .readFile(path.resolve(__dirname, './trybeChoco.json'), 'utf-8');
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

module.exports = {
  getAllChocos,
  getAllBrands,
}