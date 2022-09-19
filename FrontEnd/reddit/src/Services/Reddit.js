const reddit = (subreddit) => (
  fetch(`https://www.reddit.com/r/${subreddit}.json`)
  .then((response) => (
    response.json()
    .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
  ))
);
  
export default reddit;