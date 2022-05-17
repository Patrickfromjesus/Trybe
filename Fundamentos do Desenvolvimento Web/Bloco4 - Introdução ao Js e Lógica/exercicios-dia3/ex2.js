let word = 'banana';
console.log(word);
let reverse = "";

for(let i = 1; i <= word.length; i++) {
    reverse = reverse + word[word.length - i];
}
console.log(reverse);