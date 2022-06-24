const {books} = require('./exercícios.js');

//Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const names = [];
books.forEach((obj) => {
  if (obj.genre.toLocaleLowerCase() === 'ficção científica' || obj.genre.toLocaleLowerCase() === 'fantasia') return names.push(obj.author.name);
})
names.sort();

console.log(names);

