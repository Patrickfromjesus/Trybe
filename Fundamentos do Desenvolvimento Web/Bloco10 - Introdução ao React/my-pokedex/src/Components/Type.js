import pokemons from "../data";

function typesPokemons(type) {
  return pokemons.filter((pokemon) => pokemon.type === type);
}

export default typesPokemons;