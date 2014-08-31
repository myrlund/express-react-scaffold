/** @jsx React.DOM */

var React = require('react');

var App = require('./App');

console.log([1, 2, 3].map((n) => { return n * 2; }));

React.renderComponent(
    <App />,
    document.getElementById('app')
);
