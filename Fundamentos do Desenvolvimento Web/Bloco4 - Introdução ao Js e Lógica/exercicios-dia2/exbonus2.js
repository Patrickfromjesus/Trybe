let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i = 0; i < numbers.length - 1; i++) {
    for(let p = 0; p < numbers.length - 1; p++) {
        let box = 0;
        if(numbers[p] < numbers[p + 1]) {
            box += numbers[p];
            numbers[p] = numbers[p + 1];
            numbers[p + 1] = box;
        }
    }
}
console.log(numbers);