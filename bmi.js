const readline = require('readline-sync');

function bmi(weight, height) {
  const bmiResult = weight / (height * height);
  return bmiResult.toFixed(2);
}

const weight = readline.questionFloat('What\'s your weight ');
const height = readline.questionFloat('What\'s your height? ');

console.log(bmi(weight, height));