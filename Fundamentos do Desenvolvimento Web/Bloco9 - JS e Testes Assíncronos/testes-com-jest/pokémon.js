const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return console.log(callback(new Error('Não temos esse pokémon para você :('), null));
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    return console.log(callback(null, messageFromProfOak));
  }, 1000);
}

console.log(getPokemonDetails((pokemon) => pokemon.name === '', (...messager) => messager.find((message) => message !== null)));

module.exports = {
  getPokemonDetails,
};