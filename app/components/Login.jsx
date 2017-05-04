import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import user from '../user/user';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({
  forceRefresh: true,
});

export default class Login extends React.Component {
  componentWillMount() {
    if (user.isLogin) {
      history.push('/');
      window.location.reload();
    }
  }

  render() {
    const responseGoogle = (reply) => {
      user.login(reply);
      window.location.reload();
    };
    return (
      <div className="container-fluid login-page">
        <div className="text-center">

          <h1 className="loginheader">News Hub</h1>
        </div>
        <div className="text-center">
          <p classID="logintext"> View news headlines from over 70 Sources </p>
        </div>

        <div className="button-text">
          <div className="text-center">
            <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              buttonText="Sign-in"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </div>
        </div>
      </div>
    );
  }
}
