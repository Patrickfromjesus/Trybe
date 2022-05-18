let array = [21, 3, 6, 7, 10, 17];

function greaterValue(numbers) {
    let copy = [];
    for(let inter of numbers) {
        copy.push(inter);
    }
    for(let i  = 0; i < numbers.length - 1; i++) {
        
        for(let p = 0; p < numbers.length - 1; p++) {
        
            let box = 0;
            if(numbers[p] > numbers[p + 1]) {
                box = numbers[p];
                numbers[p] = numbers[p + 1];
                numbers[p + 1] = box;
        }
    }
}
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[0] === copy[i]) {
            return i;
        }
    }
}

console.log(greaterValue(array));