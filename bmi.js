function bmi(weight, height) {
  const bmiResult = weight / (height * height);
  return bmiResult.toFixed(2);
}

console.log(bmi(71, 1.75));