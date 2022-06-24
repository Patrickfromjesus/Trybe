const {books} = require('./exercícios.js');

//Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA.

const newModel = books.map((obj) => `${obj.name} - ${obj.genre} - ${obj.author.name}`);

console.log(newModel);