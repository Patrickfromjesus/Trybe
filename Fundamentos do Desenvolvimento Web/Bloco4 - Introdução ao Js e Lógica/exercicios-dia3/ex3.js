let array = ['java', 'javascript', 'python', 'html', 'css'];
let letters = [];

for(let i = 0; i < array.length; i++) {
    letters[i] = array[i].length;
}

for(let p = 0; p < array.length; p++) {
    let countLarge = 0;
    let countLess = 0;

    for(let q = 0; q < array.length; q++) {

        if(letters[p] > letters[q]) {
            countLarge++;
        }
        else if(letters[p] < letters[q]) {
            countLess++;
        }
    }
    if(countLarge === letters.length - 1) {
        console.log("A maior palavra é " + array[p])
    }
    else if(countLess === letters.length - 1) {
        console.log("A menor palavra é " + array[p]);
    }
}