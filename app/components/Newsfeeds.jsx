import React from 'react';
import newsStore from '../stores/newsStore';
/**
 * @class Newsfeed
 * @extends {React.Component}
 */
export default class Newsfeed extends React.Component {
  /**
   * Creates an instance of Newsfeed.
   * @param {any} props
   * @memberof Newsfeed
   */
  constructor(props) {
    super(props);
    this.handleArticleChange = this.handleArticleChange.bind(this);
    this.state = { articles: [], sourceName: '' };
  }
  /**
   * runs befor the component mounts
   * @memberof Newsfeed
   * @returns {null} returns no value
   */
  componentDidMount() {
    newsStore.addChangeListener(this.handleArticleChange);
  }

  /**
   *  runs while the component unmounts
   * @memberof Newsfeed
   * @returns {undefined}
   */
  componentWillUnmount() {
    newsStore.removeChangeListener(this.handleArticleChange);
  }
  /**
   * sets the state of the Newsfeed component
   * @memberof Newsfeed
   * @returns {null}
   */
  handleArticleChange() {
    this.setState({
      articles: newsStore.getNews(),
      sourceName: this.props.sourceName,
    });
  }
  /**
   * renders the react component
   * @memberof Newsfeed
   * @returns {*} returns all element
   */
  render() {
    const allArticles = this.state.articles.map((article, index) => {
      return (
        <div key={index} className="col-md-4 col-sm-6">
          <div className="thumbnail" href={article.url}>
            <img src={article.urlToImage} alt="" />
            <div className="caption">
              <a href={article.url}> <h4>{article.title}</h4> </a>
              <small>Date/Time:{article.publishedAt} </small>
              <p>{article.description}<a href={article.url}> Read more...</a></p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div >
        <h2 className="text-center">{this.state.sourceName}</h2>
        <div>{allArticles}</div>

      </div>
    );
  }
}
