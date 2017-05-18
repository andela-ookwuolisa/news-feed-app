import { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import user from '../userModel/UserModel';

const history = createHistory({
  forceRefresh: true,
});
/**
 * sign out Component
 * @class Logout
 * @extends {Component}
 */
class Logout extends Component {
  /**
   *before Component mounts
   *logs the user out
   * @memberof Logout
   * @returns {null} returns nothing
   */
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
