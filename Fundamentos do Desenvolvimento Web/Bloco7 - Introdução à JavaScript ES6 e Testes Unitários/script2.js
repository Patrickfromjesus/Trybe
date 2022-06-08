let oddsAndEvens = [13, 3, 4, 10, 7, 2];
let odds = [];
let evens = [];

function odssEvens() {
  for(let i = 0; i < oddsAndEvens.length; i++) {
    if(oddsAndEvens[i] % 2 === 0) {
      odds.push(oddsAndEvens[i]);
    }
    else {
      evens.push(oddsAndEvens[i]);
    }
  }
}

//Para ordenar, use isso: let sortArray = oddsAndEvens.sort(function(a, b) {return a - b}); Ou isso:
function order() {
  for(let p = 0; p < oddsAndEvens.length; p++) {
  for(let i = 0; i < oddsAndEvens.length - 1; i++) {
    let copy = 0;
    if(oddsAndEvens[i] > oddsAndEvens[i + 1]) {
      copy = oddsAndEvens[i];
      oddsAndEvens[i] = oddsAndEvens[i + 1];
      oddsAndEvens[i + 1] = copy;
    }
  }
}
}
order();

console.log(`Os números ${sortArray} se encontram ordenados de forma crescente!`);
//Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!