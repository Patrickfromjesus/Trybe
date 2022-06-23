const {books} = require('./exercícios.js');

function smallerName() {
  let nameBook = books[0].name;
  books.forEach((obj) => {
    if(obj.name.length < nameBook.length) nameBook = obj.name;
  })
  return nameBook;
}
console.log(smallerName());