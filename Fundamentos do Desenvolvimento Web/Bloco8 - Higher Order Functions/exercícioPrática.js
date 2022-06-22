//EX 1.
function makeEmplyee(name) {
  const correctEmail = name.toLowerCase().split(' ').join('_'); 
  return {
    nomeCompleto: name,
    email: `${correctEmail}@trybe.com`,
  }
}

const newEmployees = () => {
  const employees = {
    id1: makeEmplyee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: makeEmplyee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: makeEmplyee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

//EX 2.
function checkWin(winner, possible) {
  if(winner === possible) return true;
  return false;
}

function result(number, checkWin) {
  const numberWinner = Math.floor(Math.random() * (6 - 1) + 1);
  console.log(numberWinner);

  if(checkWin(number, numberWinner)) return console.log('Parabéns, você ganhou.');
  return console.log('Tente novamente.');
}

//EX 3.
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function makeGrade(answer, student) {
  let grade = 0;
  student.forEach((element, index) => {
    if(element === answer[index]) grade += 1; //Right Answer.
    else if(element === 'N.A') grade += 0; //No Answer.
    else grade -= 0.5; //Wrong Answer.
  });
  return grade;
}

const grade = (right, student, makeGrade) => makeGrade(right, student);