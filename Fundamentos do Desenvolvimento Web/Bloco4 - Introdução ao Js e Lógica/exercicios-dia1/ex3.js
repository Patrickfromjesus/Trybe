const first = 22;
const second = 22;
const third = 25;

if(first > second) {
    if(first > third){
        console.log(first);
    }
    else if(first < third){
        console.log(third);
    }
}
else if(first < second) {
    if(second > third){
        console.log(second);
    }
    else if(second < third){
        console.log(third);
    }
}
else {
    if(first === third){
    console.log("São todos iguais.");
    }
    else if(first > third) {
        console.log(first);
    }
    else if(first < third) {
        console.log(third);
    }
}