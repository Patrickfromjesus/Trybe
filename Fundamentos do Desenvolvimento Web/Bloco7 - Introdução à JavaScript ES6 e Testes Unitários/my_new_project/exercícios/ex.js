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

module.exports = {sum, myRemove};