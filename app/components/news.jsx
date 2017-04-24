var React = require('react');
var Search = require('Search');
var Newsfeeds = require('Newsfeeds');
var API = require('API');
var NewsActions = require('NewsActions');

var News = React.createClass({
  getInitialState: function(){
    return {
      newsSite: "?",
      articles: []
    }

  },
  // componentWillMount: function(){
  //   this.setState({
  //     sources: NewsActions.displaySource()
  //   })

  // },

  handleSearch: function(newsSite) {
     this.setState({
        newsSite: newsSite
     });

  },

  render: function () {  
    return (
      <div>
        <h2>The News highlights for {this.state.newsSite}</h2>
        <Search />
        <Newsfeeds articles={this.state.articles}/>
      </div>
    );
  }
});

module.exports = News;
        