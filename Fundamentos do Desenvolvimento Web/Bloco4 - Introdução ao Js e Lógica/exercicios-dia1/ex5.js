const alfa = 30;
const teta = 60;
const betta = -91;
let sum = 0;

if(alfa <= 0 || betta <= 0 || teta <= 0) {
    console.log("Error!");
}
else {
    sum = sum + (alfa + betta + teta);
}

if(sum != 180 && sum != 0) {
    console.log("false");
}
else if(sum === 180) {
    console.log("true");
}