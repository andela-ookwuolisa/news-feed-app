var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Nav Component</h2>
        <Link to="/">Get News</Link>
        <Link to="about">About</Link>
        <Link to="login">Login</Link>
      </div>
    );
  }
});

module.exports = Nav;
