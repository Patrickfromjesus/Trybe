
    for(let i = 0; i < Object.keys(localStorage).length; i++) {
        let aux = Object.keys(localStorage)[i];
        document.body.style.cssText += aux + ':' + localStorage.getItem(aux);
    }

    function changeOptions(inputClass, buttonId, change) {
    let button = document.querySelector(buttonId);
    button.addEventListener('click', function() {
        let newVal = document.querySelector(inputClass).value;
        document.body.style.cssText += change + ': ' + newVal;
        localStorage.setItem(change, newVal);
    })
    }
    changeOptions('.text-bc','#back-color', 'background-color', 'background');
    changeOptions('.text-c','#color', 'color', 'color');
    changeOptions('.font-sz','#font-size', 'font-size', 'fontSize');
    changeOptions('.line-s','#space-lines','line-height', 'lineHeight');
    changeOptions('.font-f','#font-family', 'font-family', 'fontFamily');
