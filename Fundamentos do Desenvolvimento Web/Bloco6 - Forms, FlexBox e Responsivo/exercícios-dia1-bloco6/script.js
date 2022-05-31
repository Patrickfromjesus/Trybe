let getButton = document.querySelector('#submit-button');
let checkBox = document.querySelector('#would-like2');

getButton.addEventListener('click', function(e) {
    let getName = document.querySelector('#name').value.length;
    let getEmail = document.querySelector('#email').value.length;
    let getTextarea = document.querySelector('#why-me').value.length;
    if(getName >= 10 && getName <= 40 && getEmail >= 10 && getEmail <= 50 && getTextarea <= 500 && checkBox.checked) {
        window.alert('Dados enviados com sucesso!');
        return;
    }
    e.preventDefault();
    window.alert('Dados inválidos!');
})