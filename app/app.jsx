var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('./components/Main');
var News = require('News');
var About = require('About');
var Login = require('Login');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <Route path="about" component={About}/>
    <Route path="login" component={Login}/>
    <IndexRoute component={News}/>

    </Route>
  </Router>,
  document.getElementById('app')
);