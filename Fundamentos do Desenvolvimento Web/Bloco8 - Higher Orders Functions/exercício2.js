const {books} = require('./exercícios.js');

// Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

const infoAuthors = books.map((obj) => {
  const newObj = {};
  newObj.age = obj.releaseYear - obj.author.birthYear;
  newObj.author = obj.author.name;
  return newObj;
})

infoAuthors.sort((a, b) => a.age - b.age);

console.log(infoAuthors);