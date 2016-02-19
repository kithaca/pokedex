var PokemonActions = require('../actions/pokemonActions.js');

var apiUtil = {
  fetchAllPokemon: function() {
    $.ajax( "/api/pokemon", {
      method: 'GET',
      success: function( response ) {
        PokemonActions.receiveAllPokemon( response );
      }
    });
  },
  fetchOnePokemon: function (id) {
    $.ajax( "/api/pokemon/" + id, {
      method: 'GET',
      success: function( response ) {
        PokemonActions.receiveOnePokemon( response );
      }
    });
  }

};

module.exports = apiUtil;
