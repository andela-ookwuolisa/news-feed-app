import React from 'react';
import Select from 'react-select';
import newsStore from '../stores/NewsStore';
import NewsActions from '../actions/NewsActions';
import Newsfeeds from './Newsfeeds';

 /**
 * @class Search
 * @extends {React.Component}
 */
export default class Search extends React.Component {
  /**
   * Creates an instance of Search.
   * @param {any} props
   * @memberof Newsfeed
   */
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      selectedSource: '',
      articles: [],
    };
    this.getNews = this.getNews.bind(this);
    this.setValue = this.setValue.bind(this);
    this.handleSourceChange = this.handleSourceChange.bind(this);
  }
  /**
   * runs befor the component mounts
   * @memberof Search
   * @returns {null} returns no value
   */
  componentDidMount() {
    NewsActions.displaySource();
    newsStore.addChangeListener(this.handleSourceChange);
    NewsActions.getNews('cnn', 'top');
  }
  /**
   * runs befor the component mounts
   * @memberof Search
   * @returns {null} returns no value
   */
  componentWillUnmount() {
    newsStore.removeChangeListener(this.handleSourceChange);
  }
  /**
   * sets the state of the Search component
   * @param {string} source for the news is passed as the input
   * @memberof Search
   * @returns {null} returns nothing
   */
  setValue(source) {
    this.setState({
      selectedSource: source,
    });
  }
  /**
   * calls getNews from NewsActions component
   * @memberof Search
   * @param {event} event selects the news site
   * @returns {null} returns nothing
   */
  getNews(event) {
    const newSite = this.state.selectedSource.value;
    const sort = event.target.value;
    NewsActions.getNews(newSite, sort);
  }
  /**
   * sets the state of the Search component
   * @memberof Search
   * @returns {null} returns nothing
   */
  handleSourceChange() {
    this.setState({
      sources: newsStore.displaySource(),

    });
  }
  /**
   * renders the react component
   * @memberof Search
   * @returns {*} returns all element
   */
  render() {
    const options = this.state.sources.map(source => ({
      value: source.id,
      label: source.name,
      sort: source.sortBysAvailable,
    }));
    let sortOption = '';
    if (this.state.selectedSource.sort) {
      sortOption = this.state.selectedSource.sort.map(sort =>
        <option key={`SortOption-${sort}`}>{sort}</option>);
    }


    return (
      <div className="container">
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <Select
              name="form-field-name"
              options={options}
              value={this.state.selectedSource}
              onChange={this.setValue}
              clearable={false}
            />
            <button
              className="btn btn-info"
              onClick={this.getNews}
            >
              Load News
            </button>
            <div>
              <select
                className="form-control"
                onChange={this.getNews}
              >
                {sortOption}
              </select>
            </div>
          </div>
        </div>
        <Newsfeeds sourceName={this.state.selectedSource.label} />
      </div>
    );
  }
}
