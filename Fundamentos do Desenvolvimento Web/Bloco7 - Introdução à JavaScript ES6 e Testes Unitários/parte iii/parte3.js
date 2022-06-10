const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Exercício 1
const exerciseOne = (lesson2, key, value) => lesson2[key] = value;
console.log(exerciseOne(lesson2, 'turno', 'noite'));

//Exercício 2
const exerciseTwo = (lesson) => Object.keys(lesson);
console.log(exerciseTwo(lesson2));

//Exercício 3
const exerciseThree = (lesson) => Object.keys(lesson).length;
console.log(exerciseThree(lesson2));

//Exercício 4
const exerciseFour = (lesson) => Object.values(lesson);
console.log(exerciseFour(lesson2));