let width = 4;
let iterator = 0;

for(let  i = 0; i < width; i++) {
    let chunk = "";
    iterator += 2;    

    for(let p = 1; p < width - i; p++) {
        chunk += " ";
    }

    for(let p = 1; p < iterator; p++) {
        chunk += "*";
    }

    for(let p = 1; p < width - 1; p++) {
        chunk += " ";
    }
    console.log(chunk);
}
