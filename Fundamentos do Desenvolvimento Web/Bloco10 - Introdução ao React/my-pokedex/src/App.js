import './App.css';
import React from 'react';
import NextPokemon from './Components/NextPokemon';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 id='title'>Pokedex</h1>
        <NextPokemon />
      </div>
    );
  }
}

export default App;
