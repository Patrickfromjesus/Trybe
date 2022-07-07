/* const fetch = require('node-fetch'); */

const getDiv = document.querySelector('#jokeContainer');
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async() => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const jokes = await fetch(API_URL, myObject)
    .then(response => response.json())
    .then(({ joke }) => joke);
    getDiv.innerText = jokes;
};

fetchJoke();