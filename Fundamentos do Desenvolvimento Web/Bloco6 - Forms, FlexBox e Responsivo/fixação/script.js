// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

//Q.1
HREF_LINK.addEventListener('click', function(e) {
    e.preventDefault();
})

//Q.2
INPUT_CHECKBOX.addEventListener('click', function(e) {
    e.preventDefault();
})

//Q.3
INPUT_TEXT.addEventListener('keypress', function(e) {
    if(e.key !== 'a') {
        e.preventDefault();
    }
})