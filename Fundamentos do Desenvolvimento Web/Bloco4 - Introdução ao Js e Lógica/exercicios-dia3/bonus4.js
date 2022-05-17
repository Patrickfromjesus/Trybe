const height = 5;
let t = 0;

for(let p = height; p > 0 ; p--) {
    var chunk = "";
    t += 2;
    
    for(let i = 1; i < p; i++) {
        chunk += " ";
    }
    
    for(let r = 1; r < t; r++) {
        chunk += "*";
    }

    for(let i = 1; i < p; i++) {
        chunk += " ";
    }
    console.log(chunk);
}