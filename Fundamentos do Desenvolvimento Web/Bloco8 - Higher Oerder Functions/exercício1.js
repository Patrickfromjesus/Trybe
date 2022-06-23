const {books} = require('./exercícios.js');

function authorBornIn1947() {
  const book = books.find((obj) => obj.author.birthYear === 1947);
  return book.author.name;
}
console.log(authorBornIn1947());
