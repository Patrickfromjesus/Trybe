const student = 'patrick';
const skills = ['JavaScript', 'HTML', 'CSS', 'DOM', 'ES6'];

//Função 1
function changeX(name) {
  const string = 'Tryber x aqui!'
  let newString;
  
  for(let i = 0; i < string.length; i++) {
    if(string[i] === 'x') {
      newString = `${string.substring(0, i - 1)} ${name} ${string.substring(i + 2)}`;
    }
  }

return newString;
}
const stringReturned = changeX(student);

//Função 2
function concatenate(phrase) {
  let orderSkills = skills.sort();
  return `${phrase} Minhas cinco principais habilidades são:
  ${orderSkills}.`; 
}
console.log(concatenate(stringReturned));
