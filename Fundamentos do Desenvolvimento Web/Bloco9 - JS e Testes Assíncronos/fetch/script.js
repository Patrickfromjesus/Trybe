const fetch = require('node-fetch');

 const fetchJoke = async () => {
  const url = 'htts://api.chucknorris.io/jokes/random?category=dev';

  try {
    const teste = await fetch(url);
    const { value } = await teste.json()
    console.log(value);
  }
  catch(err) {
    console.log(`Deu xabu :(\n ${err}`);
  }
} 

/* const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
  .then((response) => response.json())
  .then(({ value }) => console.log(value))
  .catch((err) => console.log(`Deu xabu :(\n ${err}`));
} */

fetchJoke();