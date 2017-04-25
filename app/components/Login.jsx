import React from 'react';

export default class Login extends React.Component{
  render() {
    return (
      <div>
        <h2>The login page</h2>
        <input onChange = {console.log("Hey, you are typing")}/>
      </div>
    );
  }
};
