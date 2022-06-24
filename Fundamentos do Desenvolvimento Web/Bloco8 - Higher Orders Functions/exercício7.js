const {books} = require('./exercícios.js');

//Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

const book = books.find((obj) => {
  let count = 0;
  const name = obj.author.name.substring(0,8);
  for(let i = 0; i < 8; i++) {
    if(name[i] === '.') count++;
  }
  return count === 3; 
})
const nameBook = book.name;

console.log(nameBook);