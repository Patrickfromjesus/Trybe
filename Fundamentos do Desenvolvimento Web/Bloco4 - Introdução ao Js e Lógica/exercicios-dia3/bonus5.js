let width = 7;
let iterator = 0;
let count = 0;
let copy = width;

//descobrir qual será a altura da pirâmide.
for(let i = 0; i < width; i++) {
    if(copy >= 0) {
        count++;
        copy -= 2;
    }
}

//iterar tantas vezes quanto sua altura, descoberta anteriormente.
for(let  i = 0; i < count; i++) {
    let chunk = ""
    iterator += 2;

        for(let q = 1; q < width / 2 - i; q++) {
            chunk += " ";    
        }

        for(let q = 1; q < iterator ; q++) {
            if(i !== count - 1) { //se não estiver na última linha, tira os asteriscos do meio.

                if(q === 1 || q === iterator - 1) { //se for os asteriscos das pontas, não tirará os asteriscos.
                    chunk += "*";
                }
                else{
                    chunk += " "; //se não for os das pontas, coloca espaço.
                }
            }
            else {
                chunk += "*";
            }    
        }
    console.log(chunk);
}