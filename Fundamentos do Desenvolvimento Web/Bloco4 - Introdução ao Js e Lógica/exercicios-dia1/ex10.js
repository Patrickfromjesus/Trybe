const value = 125;
const sellPrice = 170;
let sales = 1000;

let gain = sales * (sellPrice - (1.2 * value));

if(value < 0 || sellPrice < 0) {
    console.log("Error! Entre com um valor válido.");
}
else {
    console.log(gain);
}



