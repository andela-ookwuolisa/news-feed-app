var React = require('react');
var Search = require('Search');
var Newsfeeds = require('Newsfeeds');

var News = React.createClass({
  getInitialState: function(){
    return {
      newsSite: "CNN"
    }

  },
  handleSearch: function(newsSite) {
  this.setState({
    newsSite : newsSite
  });
  },
  render: function () {
    var {newsSite} = this.state

    
    return (
      <div>
        <h2>The News highlights</h2>
        <Search onSearch = {this.handleSearch}/>
        <Newsfeeds newsSite={newsSite}/>
      </div>
    );
  }
});

module.exports = News;
