const {books} = require('./exercícios.js');

const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some(book => (book.releaseYear > 1979 && book.releaseYear < 1990));
}
console.log(someBookWasReleaseOnThe80s());
