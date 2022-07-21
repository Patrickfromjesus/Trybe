import React, { Component } from "react";
import Pokedex from './Pokedex';

class Pokemon extends Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
    <div>
      <Pokedex key={pokemon.id} name={pokemon.name} type={pokemon.type} measurementUnit={pokemon.averageWeight.measurementUnit} weight={pokemon.averageWeight.value} image={pokemon.image} />
    </div>
    )
  }
}

export default Pokemon;