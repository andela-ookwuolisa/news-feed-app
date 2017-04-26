var React = require('react');
var {Link, IndexLink}  = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Nav Component</h2>
        <IndexLink to="/" activeClassName ="active" activeStyle = {{fontWeight:"bold"}}>Get News</IndexLink>
        <Link to="/about"activeClassName ="active" activeStyle = {{fontWeight:"bold"}}>About</Link>
        <Link to="/login"activeClassName ="active" activeStyle = {{fontWeight:"bold"}}>Login</Link>
        <a href ="#/about"> Abboutt</a>
      </div>
    );
  }
  
});

module.exports = Nav;
