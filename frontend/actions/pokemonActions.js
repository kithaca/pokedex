var AppDispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants');

var PokemonActions = {
  receiveAllPokemon: function (pokemonArr) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemons: pokemonArr
    });
  },
  receiveOnePokemon: function (pokemon) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.ONE_POKEMON_RECEIVED,
      pokemon: pokemon
    });
  }

};


module.exports = PokemonActions;
