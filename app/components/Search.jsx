import React from 'react';
import Select from 'react-select';
import newsStore from '../stores/newsStore';
import NewsActions from '../actions/newsActions';
import Newsfeeds from './Newsfeeds';


export default class Search extends React.Component {

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

  componentDidMount() {
    NewsActions.displaySource();
    newsStore.addChangeListener(this.handleSourceChange);
  }

  componentWillUnmount() {
    newsStore.removeChangeListener(this.handleSourceChange);
  }

  setValue(source) {
    this.setState({
      selectedSource: source,
    });
  }
  getNews(e) {
    const newSite = this.state.selectedSource.value;
    const sort = e.target.value;
    NewsActions.getNews(newSite, sort);
  }
  handleSourceChange() {
    this.setState({
      sources: newsStore.displaySource(),

    });
  }
  render() {
    const options = this.state.sources.map((source) => {
      return ({
        value: source.id,
        label: source.name,
        sort: source.sortBysAvailable,
      });
    });
    let sortOption = '';
    if (this.state.selectedSource.sort) {
      sortOption = this.state.selectedSource.sort.map(sort =>
        <option key={`SortOption-${sort}`}>{sort}</option>);
    }


    return (
      <div>

        <Select
          name="form-field-name"
          options={options}
          value={this.state.selectedSource}
          onChange={this.setValue}
          clearable={false}
        />
        <button className="btn btn-info" onClick={this.getNews}>Search News</button>
        <div>
          <select className="form-control" onChange={this.getNews}>{sortOption}</select>
        </div>
        <Newsfeeds
          articles={this.state.articles}
          sourceName={this.state.selectedSource.label}
        />
      </div>
    );
  }
}
