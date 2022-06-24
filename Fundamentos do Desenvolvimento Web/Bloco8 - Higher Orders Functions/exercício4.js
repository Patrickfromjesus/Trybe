const {books} = require('./exercícios.js');

//Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
const now = new Date().getFullYear();
const booksOver60 = books.filter((obj) => (now - obj.releaseYear > 60));
booksOver60.sort((a, b) => a.releaseYear - b.releaseYear);

console.log(booksOver60);