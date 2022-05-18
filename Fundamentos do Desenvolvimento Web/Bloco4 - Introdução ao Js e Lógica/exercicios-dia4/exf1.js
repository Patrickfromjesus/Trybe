let name = 'cachorro';
function isPalindromo(word) {
    let newWord = "";

    for(let i = word.length - 1; i >= 0; i--) {
        newWord += word[i];
    }

    if(newWord === word) {
        return true;
    }

    return false;
}

console.log(isPalindromo(name));