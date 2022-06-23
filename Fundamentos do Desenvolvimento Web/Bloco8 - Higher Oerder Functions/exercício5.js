const {books} = require('./exercícios.js');

const expectedResult = false;
//TODOS OS AUTORES NASCERAM NO SÉCULO XX.  1901 -> 2000


function everyoneWasBornOnSecXX() {
  return books.every((book) => (book.author.birthYear > 1900 && book.author.birthYear <= 2000));
}
console.log(everyoneWasBornOnSecXX());