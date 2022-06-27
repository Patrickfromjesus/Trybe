/* //OBJECT DESTRUCTING, SPREAD OPERATOR AND REST PARAMETER.
 const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const thridObject = {
  ...user,
  ...jobInfos,
}

const {name, age, nationality, profession, squad, squadInitials} = thridObject;

console.log(`Hi! my name is ${name}, i'm ${age} years old, ${nationality}. I'm a ${profession}, working in ${squad}, which is initied with ${squadInitials}.`);

//ARRAY DESTRUCTING

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [saud, hi] = saudacoes;

hi(saud);

//

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
let roupa = 'celular';
let objeto = 'camisa';

const storage = [comida, animal, bebida, roupa, objeto];
[animal, bebida, comida, objeto, roupa] = storage;
console.log(animal, bebida, comida, objeto, roupa);
//
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[x, y, z, ...numerosPares] = numerosPares;

console.log([x, y, z, ...numerosPares]); // [6, 8, 10, 12]; */

//DEFAULT DESTRUCTURING

/* const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

//PROPERTY SHORTHAND

const obj = (id, name, age) => {
  return {
    id,
    name,
    age,
  }
}
console.log(obj('2022144-19', 'Patrick', 19)); */

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});
console.log(getPosition(-19.8157, -43.9542));

//Default parameters
const greeting = (user = 'boss') => {
  return console.log(`Welcome, ${user}!`);
}

greeting(); 

function multiply(...x) {
  if(x[0] == undefined) return console.log('Insira um número válido.');
  return console.log(x.reduce((acc, curr) => acc * curr));
}
multiply();
