const fs = require('fs').promises;

/* async function readDates() {
  try {
    const date = await fs.readFile('./simpsons.json');
    console.log(JSON.parse(date).map(({ id, name }) => `${id} - ${name}`));
  } catch(err) {
    console.error(err);
  }
}
readDates(); */

async function searchDate(id) {
  try {
    const date = await fs.readFile('./simpsons.json');
    const finalDate = JSON.parse(date);
    const getPerson = finalDate.find(e => e.id === id.toString());
    if (!getPerson) throw new Error('Id não encontrado!');
    return console.log(getPerson);
  } catch(err) {
    console.error(err);
  }
}

searchDate(2);
