var React = require('react');
import {Link, IndexLink}  from 'react-router';

export default class Nav extends React.Component{
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-nav" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
          <div className="navbar-brand">News Hub</div>
          <div className="collapse navbar-collapse" id="collapse-nav">
          <ul className="nav navbar-nav">
            <li>
              <IndexLink to="/" > Home <span className="sr-only">(current)</span> </IndexLink>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/login" >Login</Link>
            </li>
          </ul>
          </div>
         </div>
      </nav>
    );
  }
};
