var AppDispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants');

var PokemonActions = {
  receiveAllPokemon: function (pokemonArr) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemons: pokemonArr
    });
  }

};


module.exports = PokemonActions;
