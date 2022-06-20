const sum = (a, b) => {
  if(typeof(a) != 'number' || typeof(b) != 'number') {
    throw new Error('Insira somente números.');
  }
  return a + b;
}

const sub = (a, b) => {
  if(typeof(a) != 'number' || typeof(b) != 'number') {
    throw new Error('Insira somente números.');
  }
  return a - b;
}

const mul = (a, b) => {
  if(typeof(a) != 'number' || typeof(b) != 'number') {
    throw new Error('Insira somente números.');
  }
  return a * b;
}

const div = (a, b) => {
  if(typeof(a) != 'number' || typeof(b) != 'number') {
    throw new Error('Insira somente números.');
  }
  else if(b === 0) {
    throw new Error('Divisão por zero!');  
  }
  return a / b;
}

module.exports = {sum, sub, mul, div};