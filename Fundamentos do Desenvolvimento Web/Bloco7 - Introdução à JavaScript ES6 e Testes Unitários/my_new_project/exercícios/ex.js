function sum(a, b) {
  if(typeof(a) != 'number' || typeof(b) != 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

function myRemove(arr, item) {
  let copyArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== item) {
      copyArr.push(arr[i]);
    }

  }
  return copyArr;
}

function myFizzBuzz(num) {
  if(typeof(num) != 'number') {
    throw new Error("Not a number.");
  }
  else if(num % 15 === 0) {
    return 'fizzbuzz';
  }
  else if(num % 3 === 0 && num % 5 !== 0) {
    return 'fizz';
  }
  else if(num % 5 === 0 && num % 3 !== 0) {
    return 'buzz';
  }
  return num;
}

module.exports = {sum, myRemove, myFizzBuzz};