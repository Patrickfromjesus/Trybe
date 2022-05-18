let qntNumbers = 50;
let primos = [];

for(let number = 2; number <= qntNumbers; number++) {
    let countDivisores = 0;
    for(let i = 1; i <= number; i++){
        if(number % i === 0) {
            countDivisores++;
        }
    }
    if(countDivisores === 2 ) {
        primos.push(number);
    }
}
console.log("Primos: {" + primos + "}");
console.log("O maior primo é: " + primos[primos.length - 1]);