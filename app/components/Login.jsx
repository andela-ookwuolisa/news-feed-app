import React from 'react';
import GoogleLogin from 'react-google-login';
import createHistory from 'history/createBrowserHistory';
import user from '../userModel/userModel';

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
              clientId="460538549894-1an8hpmun7pnjp0ub2mvsjl8t4t8svo2.apps.googleusercontent.com"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            >
              <img
                src="http://3.bp.blogspot.com/-Ep_sMHCGb-M/Vl9h5smpeaI/AAAAAAAACak/MQF7WdfmBgI/s640/image00.png"
                alt="google login"
              />
            </GoogleLogin>
          </div>
        </div>
      </div>
    );
  }
}
