import React, { Component } from "react";
import typesPokemons from './Type';
import Button from './Button';
import pokemons from "../data";
import takeTypes from "./takeTypes";

class NextPokemon extends Component {
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
    this.state = {
      pokemon: pokemons,
    }
  }

  handleEvent(type) {
    if(type !== 'All') {
      this.setState(() => ({
        pokemon: typesPokemons(type),
      }))
    } else {
      this.setState(() => ({
        pokemon: pokemons,
      }))
    }
  }
  
  render() {
    const arrTypes = takeTypes().map((element, index) => (
      <button key={index} className='pkm-btn' type="submit" onClick={(event) => this.handleEvent(event.target.innerHTML)}>{element}</button>
    ))
    return (
      <div>
        <button className='pkm-btn' type="submit" onClick={(event) => this.handleEvent(event.target.innerHTML)}>All</button>
        {arrTypes}
        <Button typePkm={ this.state.pokemon } />
      </div>
    );
  }
}

export default NextPokemon;