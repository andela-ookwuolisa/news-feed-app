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
  componentWillMount: function(){

  },
  

  handleSearch: function(newsSite) {
     this.setState({
        newsSite: newsSite
     });

     var that = this;

    NewsActions.getNews(newsSite);

    //  API.getNews(newsSite).then(function(temp){
    //   //  console.log(temp);
    //     that.setState({
    //       articles: temp
    //     });
    //  }, function(error){
    //     console.log(error);
    //  });

    

  },
  render: function () {    
    return (
      <div>
        <h2>The News highlights for {this.state.newsSite}</h2>
        <Search onSearch = {this.handleSearch}/>
        <Newsfeeds articles={this.state.articles}/>
      </div>
    );
  }
});

module.exports = News;
