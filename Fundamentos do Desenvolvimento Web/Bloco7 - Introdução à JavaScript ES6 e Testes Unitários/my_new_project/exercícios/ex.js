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

function encode(strDecode) {
  let copyEncode = "";

  for(let i in strDecode) {
    if(strDecode[i] === 'a') {
      copyEncode += '1';
    }
    else if(strDecode[i] === 'e') {
      copyEncode += '2';
    }
    else if(strDecode[i] === 'i') {
      copyEncode += '3';
    }
    else if(strDecode[i] === 'o') {
      copyEncode += '4';
    }
    else if(strDecode[i] === 'u') {
      copyEncode += '5';
    }
    else {
      copyEncode += strDecode[i];
    }
  }
  return copyEncode;
}

function decode(strKey) {
  let copyDecode = "";

  for(let i in strKey) {
    if(strKey[i] === '1') {
      copyDecode += 'a';
    }
    else if(strKey[i] === '2') {
      copyDecode += 'e';
    }
    else if(strKey[i] === '3') {
      copyDecode += 'i';
    }
    else if(strKey[i] === '4') {
      copyDecode += 'o';
    }
    else if(strKey[i] === '5') {
      copyDecode += 'u';
    }
    else {
      copyDecode += strKey[i];
    }
  }
  return copyDecode;
}

function techList(techArray, techString) {
  if(techArray.length === 0) {
    return 'Vazio!';
  }

  let orderArray = techArray.sort();
  let object = [];

  for(let i = 0; i < techArray.length; i++) {
    object.push( {
      tech: orderArray[i],
      name: techString,
    });
  }

  return object;
}

function hydrate(string) {
  let amount = 0;

  for(let i of string) {
    let helper = Number.parseInt(i);//Se for um número, vai transformar de boa, se for letra, vai virar NaN.

    if(typeof(helper) && helper > 0 && helper < 10) { //Se helper for número, a afirmação é verdadeira, se for NaN, retorna falso.
        amount += helper;
    }
  }

  if(amount > 1) {
    return `${amount} copos de água`;
  }
  return `${amount} copo de água`;
}

const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const searchEmployee = (id, detail) => {
  for(let i of professionalBoard) {
    if(i['id'] === id) {

      for(let p in i) {
        if(p === detail) {
          return i[detail];
        }
      }
      throw new Error('Informação indisponível.');
    }
  }
  throw new Error('ID não identificada.');
};

module.exports = {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee};