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
    if (user.isLogin ){
      history.push('/');
      window.location.reload();
    }
  }

  render() {
  const responseGoogle = (reply) => {
    user.login(reply)
    console.log(reply);
    window.location.reload();
  };
  return (
  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
  );
  }
}
