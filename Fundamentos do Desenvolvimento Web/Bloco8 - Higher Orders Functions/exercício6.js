const {books} = require('./exercícios.js');

// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const now = new Date().getFullYear();
const oldBooks = [];
books.forEach((obj) => {
  if(now - obj.releaseYear > 60) oldBooks.push(obj.name); 
})

console.log(oldBooks);

