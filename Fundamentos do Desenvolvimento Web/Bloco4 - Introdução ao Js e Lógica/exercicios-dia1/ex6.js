let peça = "BISPO";
peça = peça.toLowerCase();

if(peça === "pẽao") {
    console.log("Movimenta-se sempre para frente apenas uma casa por vez e come nas diagonais.");
}
else if(peça === "cavalo") {
    console.log("Anda e come em L, duas casas para frente ou para trás e uma para qualquer lado desejado, para frente ou para trás.");
}
else if(peça === "bispo") {
    console.log("Anda e come sempre nas diagonais, quantas casas quiser, para frente ou para trás.");
}
else if(peça === "torre") {
    console.log("Anda e come na horizontal e na vertical, quantas casas quiser, para frente ou para trás.");
}
else if(peça === "dama") {
    console.log("Anda e come na diagonal e nas verticais, quantas casas quiser, para frente ou para trás.");
}
else if(peça === "rei") {
    console.log("Anda e come igual à dama, porém, apenas uma casa por vez.");
}
else {
    console.log("ERROR! Entre com uma peça válida.")
}