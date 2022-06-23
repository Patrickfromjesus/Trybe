const {books} = require('./exercícios.js');

const expectedResult = false;

function authorUnique() {
  return books.every((book) => {
    return !books.some((anybook) => { //Se pelo menos um tiver ano de nascimento igual, retorna true, mas nega o true com '!'.
      return (book.author.birthYear === anybook.author.birthYear) && (book.author.name !== anybook.author.name); //Tem mesmo ano de nascimento, mas são autores diferentes, daí retorna true.
    })
  })
}
console.log(authorUnique());



