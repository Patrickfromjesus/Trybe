const number = 10;
let factory = 1;

for(let i = 0; i < number; i++) {
    factory *= 10 - i;
}
console.log(factory);