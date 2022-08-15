function randomNumber() {
  return Math.floor(Math.random() * 100);
}

function upperCase(string) {
  return string.toUpperCase();
}

function firstLetter(string) {
  return string[0];
}

function concatStrings(string1, string2) {
  return string1 + string2;
}

module.exports = { randomNumber, upperCase, firstLetter, concatStrings };