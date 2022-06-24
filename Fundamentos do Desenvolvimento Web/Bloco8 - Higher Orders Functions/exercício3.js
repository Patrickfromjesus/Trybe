const {books} = require('./exercícios.js');

//Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

const booksGenre = books.filter((obj) => (obj.genre.toLowerCase() === 'ficção científica' || obj.genre.toLowerCase() === 'fantasia'))

console.log(booksGenre);