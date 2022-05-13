const salary = 3000.00;
let total = 0;

//para INSS
if(salary <= 1556.94) {
    total += (salary * 0.92); //alíquota de 8%
}
else if(salary > 1556.94 && salary <= 2594.92) {
    total += (salary * 0.91); //alíquota de 9%
}
else if(salary > 2594.92 && salary <= 5189.82) {
    total += (salary * 0.89); //alíquota de 11%
}
else {
    total += salary - 570.88; //alíquota máxima
}

//para IR
if(total > 1903.98 && total <= 2826.65) {
    total = (total * 0.925 + 142.80); //alíquota de 7,5%
    console.log(total);
}
else if(total > 2826.65 && total <= 3751.05) {
    total = (total * 0.85 + 354.80); //alíquota de 15%
    console.log(total); 
}
else if(total > 3751.05 && total <= 4664.68) {
    total = (total * 0.775 + 636.13); //alíquota de 22,5%
    console.log(total);
}
else if(total > 4664.68) {
    total = (total * 0.725 + 869.36); //alíquota de 27,5%
    console.log(total);
}