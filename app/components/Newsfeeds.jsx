var React = require('react');

var Newsfeeds = React.createClass({
  render: function () {
    var allArticles = this.props.articles.map(function(article, index){
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
