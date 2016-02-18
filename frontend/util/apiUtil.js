var PokemonActions = require('../actions/pokemonActions.js');

var apiUtil = {
  fetchAllPokemon: function() {
    $.ajax( "/api/pokemon", {
      method: 'GET',
      success: function( response ) {
        PokemonActions.receiveAllPokemon( response );
      }
    });
  }
};

module.exports = apiUtil;
