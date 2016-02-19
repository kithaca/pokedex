var React = require('react');
var PokemonIndex = require('./pokemonIndex.jsx');

var App = React.createClass({
  render: function() {
    return(
      <div id="pokedex">
        <div className="pokemon-index-pane">
          <PokemonIndex/>
        </div>
        
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;
