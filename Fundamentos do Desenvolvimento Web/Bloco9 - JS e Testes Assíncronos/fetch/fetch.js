/* const fetch = require('node-fetch'); */

const getButton = document.querySelector('#bible-btn');

getButton.addEventListener('click', () => {
const getInput = document.querySelector('#text-bible').value.split('/');
const getText = document.querySelector('#text');

const fetchJoke = () => {
  const url = `https://www.abibliadigital.com.br/api/verses/acf/${getInput[0]}/${getInput[1]}`;
  fetch(url)
  .then((response) => response.json())
  .then(({ verses }) => {
    getText.innerHTML = verses.map((element) => `${element.number}. ${element.text}`).join(' ');
    return getText.innerHTML;
  })
  .catch((error) => error);
}
fetchJoke();

})