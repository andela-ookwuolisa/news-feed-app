import React from 'react';
import propType from 'prop-types';
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
   * iterates through the articles and returns a title, description and image.
   * @memberof Newsfeed
   * @returns {object} jsx object
   */
  newsArticles() {
    let story;
    // this functions ensures that the article descrooption are not more than 30 words.
    return this.state.articles.map((article) => {
      if (article.description) {
        story = article.description.split(' ');
        story = story.slice(0, 30);
        story = story.join(' ');
      } else {
        story = '';
      }

      return (
        <div key={`articles${article.title}`} className="col-md-4 col-sm-6">
          <div className="thumbnail" href={article.url}>
            <img src={article.urlToImage} alt="" />
            <div className="caption">
              <a href={article.url}> <h4>{article.title}</h4> </a>
              <p>{story}<a href={article.url}> ...Read more</a></p>
            </div>
          </div>
        </div>
      );
    });
  }

  /**
   * renders the react component
   * @memberof Newsfeed
   * @returns {*} returns all element
   */
  render() {
    return (
      <div >
        <h2 className="text-center">{this.state.sourceName}</h2>
        <div>{this.newsArticles()}</div>

      </div>
    );
  }
}

Newsfeed.propType = {
  sourceName: propType.string,
};
Newsfeed.defaultProps = {
  sourceName: 'CNN',
};
