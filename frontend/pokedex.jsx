var React = require('react');
var ReactDOM = require('react-dom');

//temporary
var apiUtil = require('./util/apiUtil.js');

apiUtil.fetchAllPokemon();

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Main />, document.getElementById('main'));
});
