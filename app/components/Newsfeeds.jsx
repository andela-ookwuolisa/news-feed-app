import React from 'react';
import newsStore from '../stores/newsStore';

export default class Newsfeed extends React.Component{

  constructor(){
    super()
    this.state = {
    articles:[]
    };
  }


componentWillMount() {
  newsStore.addChangeListener(this.handleArticleChange.bind(this));
}
componentWillUnmount() {
  newsStore.removeChangeListener(this.handleArticleChange.bind(this));
}
handleArticleChange() {
  this.setState({
    articles: newsStore.getNews(),
    

  })
}

  render () {
    var allArticles = this.state.articles.map(function(article, index){
      return (    

        <div key={index}>
  <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
      <img src={article.urlToImage} />
      <div className="caption">
        <h3>{article.title}</h3>
        <small>{article.publishedAt} </small>
        <p>{article.description}<a href={article.url}> Read more...</a></p>
        <span></span>
      </div>
    </div>
  </div>
</div>

      )
    });
    return (
      <div>
          <h2> This is the Newsfeed for {this.props.sourceName}</h2>
          <div>{allArticles}</div>
  
      </div>
    );
  }
};
