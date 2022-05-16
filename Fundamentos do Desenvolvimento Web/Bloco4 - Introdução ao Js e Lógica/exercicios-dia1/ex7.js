let grade = 80;

if(grade >= 90 && grade <= 100) {
    grade = 'A';
}
else if(grade >= 80) {
    grade = 'B';
    console.log(grade);
}
else if(grade >= 70) {
    grade = 'C';
    console.log(grade);
}
else if(grade >= 60) {
    grade = 'D';
    console.log(grade);
}
else if(grade >= 50) {
    grade = 'E';
    console.log(grade);
}
else if(grade < 50 && grade >= 0) {
    grade = 'F';
    console.log(grade);
}
else {
    console.log("ERROR! Entre com um nota válida.")
}