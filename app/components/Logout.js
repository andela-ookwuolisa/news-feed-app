import React, {Component} from 'react';
import createHistory from 'history/createBrowserHistory';
import user from '../user/user';

const history = createHistory({
  forceRefresh: true,
});
class Logout extends Component {
  componentWillMount() {
    if (user.isLogin) {
      user.logOut();
      history.push('/#/login');
      window.location.reload();
    } else {
      history.push('/#/login');
    }
  }
}
export default Logout;
