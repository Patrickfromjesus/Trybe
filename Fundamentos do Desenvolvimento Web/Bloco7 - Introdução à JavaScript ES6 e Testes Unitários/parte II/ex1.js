let number = 6;
let fatorialNumber = number;

if(number >= 0) {
  const fatorial = (number) => {
    if(number > 1) {
      fatorialNumber *= (number - 1);
      number--;
      fatorial(number);
      return fatorialNumber;
    }
  }

(number > 1) ? console.log(fatorial(number)) : console.log(1);
}