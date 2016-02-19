var React = require('react');
var PokemonStore = require('../stores/pokemonStore.js');
var apiUtil = require('../util/apiUtil.js');
var PokemonIndexItem = require('./pokemonIndexItem');

var PokemonIndex = React.createClass({
  componentDidMount: function() {
    apiUtil.fetchAllPokemon();
    this.token = PokemonStore.addListener( this._onChange );
  },
  getInitialState: function () {
    return { pokemons: PokemonStore.all() };
  },
  render: function() {
    var pokeList = this.state.pokemons.map( function( pokeman ) {
      return (
        <PokemonIndexItem
          pokemon={pokeman}
          key={pokeman.id}/>
      );
    });
    return (
      <ul>
        {pokeList}
      </ul>
    );
  },
  _onChange: function() {
    this.setState({ pokemons: PokemonStore.all() });
  },
  componentWillUnMount: function() {
    this.token.remove();
  }

});


module.exports = PokemonIndex;
