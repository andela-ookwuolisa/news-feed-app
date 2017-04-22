var React = require('react');
var Search = require('Search');
var Newsfeeds = require('Newsfeeds');
var API = require('API');

var News = React.createClass({
  getInitialState: function(){
    return {
      newsSite: "?",
      articles: []
    }

  },
  handleSearch: function(newsSite) {
     this.setState({
        newsSite: newsSite
     });

     var that = this;

     API.getNews(newsSite).then(function(temp){
      //  console.log(temp);
        that.setState({
          articles: temp
        });
     }, function(error){
        console.log(error);
     });
    //  console.log()
    // this.setState({
    //   newsSite : API.getNews(newsSite)
    // });

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
