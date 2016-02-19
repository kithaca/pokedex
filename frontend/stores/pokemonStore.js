var Store = require( 'flux/utils' ).Store;
var Dispatcher = require( '../dispatcher/dispatcher.js' );
var PokemonConstants = require( '../constants/pokemonConstants.js' );
var _pokemons = {};
var PokemonStore = new Store( Dispatcher );

PokemonStore.__onDispatch = function( payload ) {
  switch( payload.actionType ) {
    case PokemonConstants.POKEMON_RECEIVED:
      PokemonStore.resetPokemons( payload.pokemons );
      break;
    case PokemonConstants.ONE_POKEMON_RECEIVED:
      PokemonStore.updateOnePokemon( payload.pokemon );
      break;
  }
};

PokemonStore.all = function() {
  var result = [];
  Object.keys(_pokemons).forEach( function(key) {
    result.push( _pokemons[key] );
  });
  return result;
};

PokemonStore.resetPokemons = function(pokemons) {
  _pokemons = {};
  pokemons.forEach( function( pokeman ) {
    _pokemons[pokeman.id] = pokeman;
  });
  this.__emitChange();
};

PokemonStore.updateOnePokemon = function( pokemon ) {
  _pokemons[pokemon.id] = pokemon;
  this.__emitChange();
};

PokemonStore.find = function(pokemonId) {
  return _pokemons[pokemonId];
};

module.exports = PokemonStore;
