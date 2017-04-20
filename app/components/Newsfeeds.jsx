var React = require('react');

var Newsfeeds = React.createClass({
  render: function () {
    var {newsSite}=this.props
    return (
      <div>
          <h2>{newsSite}</h2>
        <h3>
            <a href = '#'>Barcelona crashes out</a> 
        </h3>
      </div>
    );
  }
});

module.exports = Newsfeeds;
