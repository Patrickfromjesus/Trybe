const readline = require('readline-sync');

function bmi(weight, height) {
  const bmiResult = weight / (height * height);
  return bmiResult.toFixed(2);
}

const weight = readline.questionFloat('What\'s your weight ');
const height = readline.questionFloat('What\'s your height? ');

const bmiCalc = bmi(weight, height);

console.log(bmiCalc);

function stateIn(value) {
  if (value < 18.5) return 'under weight';
  if (value < 24.9) return 'normal weight';
  if (value < 29.9) return 'overweight';
  if (value < 34.9) return 'obesity I';
  if (value < 39.9) return 'obesity II';
  return 'obesity III and IV';
}
console.log(`\nYou\'re ${stateIn(bmiCalc)}`);