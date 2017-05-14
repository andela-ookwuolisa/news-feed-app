import React from 'react';
import { Link, IndexLink } from 'react-router';
import User from '../userModel/userModel';

export default () => {
  let name = User.name;
  name = name.split(' ');
  name = name[0];
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#collapse-nav"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <div className="navbar-brand">News Hub</div>
        <div className="collapse navbar-collapse" id="collapse-nav">
          <ul className="nav navbar-nav">
            <li>
              <IndexLink to="/" > Welcome, {name} <span className="sr-only">(current)</span> </IndexLink>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/logout" >Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
