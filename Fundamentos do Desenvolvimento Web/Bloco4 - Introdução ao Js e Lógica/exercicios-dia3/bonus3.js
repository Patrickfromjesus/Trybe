const side = 5;

for(let p = 1; p <= side; p++) {
    let chunk = "";
    
    for(let i = side; i > p; i--) {
        chunk += " ";
    }

    for(let q = 0; q < p; q++) {
    chunk += "*";
    }
    console.log(chunk);
}