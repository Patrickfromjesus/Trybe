import pokemons from "../data";

function takeTypes() {
  const types = [];
  pokemons.forEach((pokemon) => {
    types.push(pokemon.type);
  });
  types.forEach((element, index) => {
      types.forEach((item, ind) => {
          if(index !== ind) {
              if(element === item) types.splice(index, 1); 
          } 
      });
  });
  return types;
}

export default takeTypes;