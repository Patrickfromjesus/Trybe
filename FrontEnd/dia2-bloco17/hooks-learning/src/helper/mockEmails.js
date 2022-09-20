function fetchEmail() {
  return fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => data.content);
}

export default fetchEmail;
