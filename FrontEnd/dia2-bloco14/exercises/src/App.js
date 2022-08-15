import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    };
  }

  componentDidMount() {
    const API_URL = 'https://dog.ceo/api/breeds/image/random';
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => this.setState({ img: data.message, status: data.status }));
  }

  render() {
    const { img, status } = this.state;

    return (
      <div className="App">
        <h2>Joke:</h2>
        <img src={ img } alt="dog" />
        <h3>{ status }</h3>
      </div>
    );
  }
}

export default App;