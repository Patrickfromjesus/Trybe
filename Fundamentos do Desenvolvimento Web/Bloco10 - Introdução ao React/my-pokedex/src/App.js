import './App.css';
import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 id='title'>Pokedex</h1>
        <div className='div-pokedex'>
          {pokemons.map((pokemon) => {
            return <Pokedex key={pokemon.id} name={pokemon.name} type={pokemon.type} measurementUnit={pokemon.averageWeight.measurementUnit} weight={pokemon.averageWeight.value} image={pokemon.image} />
          }
          )}
        </div>
      </div>
    );
  }
}

export default App;
