import React from 'react';
import GoogleLogin from 'react-google-login';
import createHistory from 'history/createBrowserHistory';
import user from '../userModel/UserModel';

const history = createHistory({
  forceRefresh: true,
});
/**
 * log in Component
 * signs the user in
 * @class Login
 * @extends {Component}
 */
export default class Login extends React.Component {
   /**
   * before component mounts
   * @memberof login
   * @return {undefined}
   */
  componentWillMount() {
    if (user.isLogin) {
      history.push('/');
      window.location.reload();
    }
  }
  /**
   * @returns {*} render google login
   * @memberof Login
   */
  render() {
    const responseGoogle = (reply) => {
      user.login(reply);
      window.location.reload();
    };
    return (
      <div className="container-fluid login-page">
        <div className="text-center">

          <h1 className="login-header">Welcome to News Hub</h1>
        </div>
        <div className="text-center">
          <p className="login-text"> View headlines from over 70 Sources </p>
        </div>

        <div className="button-text">
          <div className="text-center">
            <GoogleLogin
              clientId={process.env.CLIENT_ID}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            >
              <img
                src="img/login.png"
                alt="google login"
              />
            </GoogleLogin>
          </div>
        </div>
      </div>
    );
  }
}
