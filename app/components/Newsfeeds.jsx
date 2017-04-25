import React from 'react';
import newsStore from '../stores/newsStore';

export default class Newsfeed extends React.Component{

  constructor(){
    super()
    this.state = {
    articles:[]
    };
  }

// getInitialState() {
//   return {
//     articles: []
//   }
// },

componentDidMount() {
  newsStore.addChangeListener(this.handleArticleChange.bind(this));
}

handleArticleChange() {
  this.setState({
    articles: newsStore.getNews(),
    

  })
}

  render () {
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
          <h2> This is the Newsfeed for {this.props.sourceName}</h2>
          <ul>{allArticles}</ul>
          <h3> footer </h3>
  
      </div>
    );
  }
};
