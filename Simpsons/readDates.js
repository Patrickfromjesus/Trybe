const { writeFile } = require('fs');

const fs = require('fs').promises;

const PATH_PERSON = './simpsons.json';

/* async function readDates() {
  try {
    const date = await fs.readFile(PATH_PERSON);
    console.log(JSON.parse(date).map(({ id, name }) => `${id} - ${name}`));
  } catch(err) {
    console.error(err);
  }
}
readDates(); */

/* async function searchDate(id) {
  try {
    const date = await fs.readFile(PATH_PERSON);
    const finalDate = JSON.parse(date);
    const getPerson = finalDate.find(e => e.id === id.toString());
    if (!getPerson) throw new Error('Id não encontrado!');
    return console.log(getPerson);
  } catch(err) {
    console.error(err);
  }
}
searchDate(2); */

/* async function ex6D () {
  try {
    const date = await fs.readFile(PATH_PERSON);
    const finalDate = JSON.parse(date);
    const filteredDate = finalDate.filter(({ id }) => Number(id) >= 1 && Number(id) <= 4);
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(filteredDate));
    console.log('Alteração feita com sucesso!');
  } catch(err) {
    console.error(err);
  }
}

const ex6DCall = async () => await ex6D();
ex6DCall(); */
