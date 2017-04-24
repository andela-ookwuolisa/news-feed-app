var React = require('react');
import newsStore from '../stores/newsStore';

var Newsfeeds = React.createClass({

getInitialState() {
  return {
    articles: []
  }
},

componentDidMount() {
  newsStore.addChangeListener(this.handleArticleChange);
},

handleArticleChange() {
  this.setState({
    articles: newsStore.getNews(),
    

  })
},

  render: function () {
    var allArticles = this.state.articles.map(function(article, index){
      return (
        <li key={index}> 
          <h2> {article.title} </h2>
          <small>{article.author} - {article.publishedAt} </small>
          <p> {article.description} </p>
        </li>

      )
    });
    return (
      <div>
          <h2> This is the Newsfeed Component</h2>
          <ul>{allArticles}</ul>
  
      </div>
    );
  }
});

module.exports = Newsfeeds;
