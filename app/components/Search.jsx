import React from 'react';
import Select from 'react-select';
import newsStore from 'NewsStore';
import NewsActions from 'NewsActions';
import Newsfeeds from 'Newsfeeds';
import 'react-select/dist/react-select.css';

export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      currentValue: '',
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

  setValue(val) {
    this.setState({
      currentValue: val,
    });
  }
  getNews(e) {
    const newSite = this.state.currentValue.value;
    const sort = e.target.value;
    NewsActions.getNews(newSite, sort);
  }
  handleSourceChange() {
    this.setState({
      sources: newsStore.displaySource(),

    });
  }

  // onFormSubmit: function(e) {
  //   e.preventDefault();
  //   var newsSite = this.refs.newsSite.value;
  //   if (newsSite.length > 0){
  //     this.refs.newsSite.value = "";
  //     this.props.onSearch(newsSite.toLowerCase());
  //   }

  //
  render() {
    const options = this.state.sources.map((source) => {
      return ({ value: source.id,
        label: source.name,
        sort: source.sortBysAvailable,
      });
    });
    let sortOption = '';
    if (this.state.currentValue.sort) {
      sortOption = this.state.currentValue.sort.map((sort, index) => {
        const value = index * Date.now();
        return <option key={value}>{sort}</option>;
      });
    }


    return (
      <div>

        <Select
          name="form-field-name"
          options={options}
          value={this.state.currentValue}
          onChange={this.setValue}
          clearable={false}
          ref="search-bar"
        />
        <button className="btn btn-info" onClick={this.getNews}>Search News</button>
        <div>
          <select className="form-control" onChange={this.getNews}>{sortOption}</select>
        </div>
        <Newsfeeds
          articles={this.state.articles}
          sourceName={this.state.currentValue.label}
        />
      </div>
    );
  }
}
