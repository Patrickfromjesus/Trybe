//1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//2
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

//3

let average = (sum / numbers.length);
console.log(average);

//4
if(average > 20) {
    console.log("Valor maior que 20.");
}
else {
    console.log("Valor menor ou igual a 20.");
}

//5
let number = numbers;
for(let i = 0; i < numbers.length - 1; i++) {
    for(let p = 0; p < numbers.length - 1; p++) {
        let box = 0;
        if(number[p] < number[p + 1]) {
            box += number[p];
            number[p] = number[p + 1];
            number[p + 1] = box;
        }
    }
}
console.log(number[0]);

//6
let cont = 0;
for(let q = 0; q < numbers.length; q++) {
    if(numbers[q] % 2 !== 0) {
        cont++;
    }
}

if(cont === 0 ) {
    console.log("Nenhum valor ímpar encontrado.");
}
else {
    console.log(cont + " valores ímpares neste array.");
}

//7
number = numbers;
for(let i = 0; i < numbers.length - 1; i++) {
    for(let p = 0; p < numbers.length - 1; p++) {
        let box = 0;
        if(number[p] > number[p + 1]) {
            box += number[p];
            number[p] = number[p + 1];
            number[p + 1] = box;
        }
    }
}
console.log(number[0]);

//8
let arr = [];
for(let i = 1; i < 26; i++) {
    arr.push(i);
}
console.log(arr);

//9
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i] / 2);
}