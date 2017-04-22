var React = require('react')

var Login = React.createClass({

  render: function () {
    return (
      <div>
        <h2>The login page</h2>
        <input onChange = {console.log("Hey, you are typing")}/>
      </div>
    );
  }
});

module.exports = Login;
