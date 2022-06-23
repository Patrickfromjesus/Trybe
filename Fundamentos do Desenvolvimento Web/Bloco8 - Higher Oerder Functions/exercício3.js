const {books} = require('./exercícios.js');

function getNamedBook() {
  return books.find((obj) => obj.name.length === 26);
}

console.log(getNamedBook());
