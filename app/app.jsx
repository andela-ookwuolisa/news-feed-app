import React from 'react';
import ReactDOM from 'react-dom';
import 'react-select/dist/react-select.css';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';
import Search from './components/Search';
import Login from './components/Login';
import Logout from './components/Logout';
import '../public/index.scss';
import user from './userModel/UserModel';

const requireAuthentication = (nextState, replace) => {
  if (!user.isLogin) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },

    });
  }
};

const checkAuth = (nextState, replace) => {
  if (user.isLogin) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname },

    });
  }
};

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main} onEnter={requireAuthentication}>
      <IndexRoute component={Search} />
    </Route>
    <Route path="login" component={Login} onEnter={checkAuth} />
    <Route path="logout" component={Logout} />
  </Router>,
  document.getElementById('app'),
);
