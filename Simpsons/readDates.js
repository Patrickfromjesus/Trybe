const fs = require('fs').promises;

async function readDates() {
  try {
    const date = await fs.readFile('./simpsons.json');
    console.log(JSON.parse(date).map(({ id, name }) => `${id} - ${name}`));
  } catch(err) {
    console.error(err);
  }
}

readDates();