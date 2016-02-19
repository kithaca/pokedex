var React = require('react');
var ReactDOM = require('react-dom');
var PokemonIndex = require('./components/pokemonIndex.jsx');
var App = require('./components/app.jsx');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

var routes = (
  <Route component={App} path="/">
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('root'));
});
