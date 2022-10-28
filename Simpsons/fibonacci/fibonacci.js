const readline = require('readline-sync');

function makeFibo(n) {
  if (n < 1) throw new Error('Value must be greater than zero.');
  const fibonacciNums = [1, 1];
  if (n === 1) return console.log(1);
  
  while (fibonacciNums.length < n) {
    const newValue = fibonacciNums[fibonacciNums.length - 1] + fibonacciNums[fibonacciNums.length - 2];
    fibonacciNums.push(newValue);
  }

  console.log(fibonacciNums);
}

const num = readline.questionInt('Type a value greater than zero: \n');
makeFibo(num);
