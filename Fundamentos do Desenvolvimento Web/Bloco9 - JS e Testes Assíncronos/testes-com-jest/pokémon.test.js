const { getPokemonDetails } = require("./pokémon");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    function callback(certa, errada) {
      expect(certa).toEqual(new Error ('Não temos esse pokémon para você :('));
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    function callback(errada, certa) {
      expect(certa).toEqual('Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf');
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Bulbasaur', callback);  
  })
})