const phrase = 'Antônio, brincalhão, foi no banheiro e não sabemos o que aconteceu';

function orderLength(words) {

for(let i = 0; i < words.length - 1; i++) {

  for(let p = 0; p < words.length - 1; p++) {

    if(words[p].length < words[p + 1].length) {
      let copy = words[p];
      words[p] = words[p + 1];
      words[p + 1] = copy;
    }

  }
}

return words[0];
}

const longestWord = (phrase) => {
  let storageWord =[];
  let init = 0;

  for(let i = 0; i < phrase.length; i++) {
    
    if(phrase[i] === ' ') {
      let word = phrase.substring(init, i);
      storageWord.push(word);
      init  = i + 1;
    }
  }

  storageWord.push(phrase.substring(init));

  return orderLength(storageWord);
}

console.log(`A maior palavra é: ${longestWord(phrase)}`);
