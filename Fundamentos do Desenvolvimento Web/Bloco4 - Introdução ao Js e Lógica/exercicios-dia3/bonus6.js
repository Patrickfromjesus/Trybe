const number = 11;
let qntDivisores = 0;

for(let i = 1; i <= number; i++) {
    if(number % i === 0) {
        qntDivisores++;
    }
}
if(qntDivisores !== 2) {
    console.log("NÃO é primo!");
}
else {
    console.log("É primo!");
}
