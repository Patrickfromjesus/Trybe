//Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 3, 4, 5, 6,));

