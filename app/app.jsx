import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from'react-router';
import Main from './components/Main';
import Search from 'Search';
import About from 'About';
import Login from 'Login';
import '../public/index.scss';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="login" component={Login}/>
      <IndexRoute component={Search}/>
    </Route>
  </Router>,
  document.getElementById('app')
);