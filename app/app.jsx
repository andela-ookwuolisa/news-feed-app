import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';
import Search from 'Search';
import About from 'About';
import Login from 'Login';
import Logout from './components/Logout';
import '../public/index.scss';
import'react-select/dist/react-select.css';
import user from './user/user';

function requireAuth(nextState, replace) {
  if (!user.isLogin) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }

    })
  }
}

function checkAuth(nextState, replace) {
  if (user.isLogin) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }

    })
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main} onEnter={requireAuth}>
      <Route path="about" component={About} />
      <Route path="logout" component={Logout} />
      <IndexRoute component={Search} />

    </Route>
    <Route path="login" component={Login} onEnter={checkAuth} />
    <Route path="logout" component={Logout} />
  </Router>,
  document.getElementById('app'),
);
