import React, { Component } from 'react';
import Jokes from './Components/Jokes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jokes />
      </div>
    );
  }
}

export default App;