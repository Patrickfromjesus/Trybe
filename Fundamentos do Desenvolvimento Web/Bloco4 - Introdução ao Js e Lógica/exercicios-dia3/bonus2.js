const base = 3;

for(let i = 1; i <= base; i++) {
    let chunk = "";
    for(let p = 0; p < i; p++) {
    chunk += "*";
    }
    console.log(chunk);
}