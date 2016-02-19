var React = require('react');
var PokemonStore = require('../stores/pokemonStore');
var apiUtil = require('../util/apiUtil');

var PokemonDetail = React.createClass({
  componentDidMount: function() {
    this.token = PokemonStore.addListener( this._onChange );
  },
  getInitialState: function() {
    return this.getStateFromStore();
  },
  componentWillUnMount: function() {
    this.token.remove();
  },
  getStateFromStore: function () {
    return { pokemon:
      PokemonStore.find( parseInt(
        this.props.params.pokemonId )) };
  },
  componentWillReceiveProps: function(newProps) {
    apiUtil.fetchOnePokemon(newProps.params.pokemonId);
  },
  render: function () {
    if ( !this.state.pokemon ){
      return(
        <div></div>
      );
    } else {
      return(
        <div>
          <div className="pokemon-detail-pane">
            <div className="detail">
              <img src={this.state.pokemon.image_url}/>
            </div>
          </div>
        </div>
      );
    }
  },
  _onChange: function() {
    this.setState({ pokemon: PokemonStore.find(this.props.params.pokemonId) });
  }

});

module.exports = PokemonDetail;
