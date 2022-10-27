const { parse } = require('path');

const fs = require('fs').promises;

const PATH_NAME = './simpsons.json';
const PATH_FAMILY = './simpsonFamily.json';

/* async function alterSimpsons() {
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

waitMane(); */

/* async function ex6E() {
  try {
    const date = await fs.readFile(PATH_NAME, 'utf-8');
    const dateFamily = await fs.readFile(PATH_FAMILY, 'utf-8');
    const finalDate = JSON.parse(date);
    const filteredDate = finalDate.find(({ name }) => name.includes('Nelson'));
    await fs.writeFile(PATH_FAMILY, JSON.stringify([...JSON.parse(dateFamily), filteredDate]));
    console.log('Alteração feita com sucesso!');
  } catch(err) {
    console.error(err);
  }
}

const ex6ECall = async () => ex6E();
ex6ECall(); */