const fs = require('fs').promises;

const PATH_NAME = './simpsons.json';

async function alterSimpsons() {
  try {
    const oldDate = await fs.readFile(PATH_NAME);
    const addDate = JSON.parse(oldDate).filter(({ id }) => id !== '6' && id !== '10');
    console.log(addDate);
    const newDate = await fs.writeFile(PATH_NAME, JSON.stringify(addDate));
    console.log('JSON alterado com sucesso!');
  } catch(err) {
    console.error(err);
  }
}

const waitMane = async () => await alterSimpsons();

waitMane();