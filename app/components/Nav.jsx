var React = require('react');
import {Link, IndexLink}  from 'react-router';

export default class Nav extends React.Component{
  render() {
    return (
      <div>
        <h2>Nav Component</h2>
        <IndexLink to="/" activeClassName ="active" activeStyle = {{fontWeight:"bold"}}>Get News</IndexLink>
        <Link to="/about"activeClassName ="active" activeStyle = {{fontWeight:"bold"}}>About</Link>
        <Link to="/login"activeClassName ="active" activeStyle = {{fontWeight:"bold"}}>Login</Link>
      </div>
    );
  }
};
