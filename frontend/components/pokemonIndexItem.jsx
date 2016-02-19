var React = require('react');
var Link = require('react-router').Link;
var History = require('react-router').History;

var PokemonIndexItem = React.createClass({

  mixins: [History],
  showDetail: function () {
    this.history.push("/pokemon/" + this.props.pokemon.id);
  },
  render: function () {
    return (
      <li className="poke-list-item"
        onClick={this.showDetail}>
        Name: {this.props.pokemon.name}
        <br/>
        Poke Type: {this.props.pokemon.poke_type}
      </li>
    );
  }
});

module.exports = PokemonIndexItem;
