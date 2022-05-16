let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let box = numbers;
for(let i = 0; i < box.length - 1; i++) {
    box[i] *= numbers[i + 1];
}
box[numbers.length - 1] = numbers[numbers.length - 1] * 2;
console.log(box);