import React from 'react';
import Select from 'react-select';
import newsStore from 'NewsStore';
import NewsActions from 'NewsActions';
import Newsfeeds from 'Newsfeeds';

import 'react-select/dist/react-select.css';

export default class Search extends React.Component{

  constructor(){
    super()
    this.state = {
       sources: [],
    currentValue:'',
    articles:[]
    };
  }
  
componentWillMount() {
   NewsActions.displaySource()
  newsStore.addChangeListener(this.handleSourceChange.bind(this));
}

componentWillUnmount() {
  newsStore.removeChangeListener(this.handleSourceChange.bind(this));
}
handleSourceChange() {
  this.setState({
    sources: newsStore.displaySource()  

  });
}
setValue(val){
      this.setState({
      currentValue: val
    });  
}
getNews(e){
  
  var newSite = this.state.currentValue.value;
  var sort = e.target.value;
  NewsActions.getNews(newSite,sort);
}

  




  // onFormSubmit: function(e) {
  //   e.preventDefault();
  //   var newsSite = this.refs.newsSite.value;
    
  //   if (newsSite.length > 0){
  //     this.refs.newsSite.value = "";
  //     this.props.onSearch(newsSite.toLowerCase());
  //   }

  // },

  
  render () { 
    this.state.currentValue.sort
    var options = this.state.sources.map((source)=>{
      return ({value: source.id,
        label:source.name,
        sort:source.sortBysAvailable
    });
  })

  if(this.state.currentValue.sort){
  var option = this.state.currentValue.sort.map((sort, index)=> <option key={index}>{sort}</option>)
  }


    return (
      <div>

        <Select
        name = "form-field-name"
        options = {options}
        value= {this.state.currentValue}
        onChange = {this.setValue.bind(this)}
        clearable={false}
        ref = "search-bar"
        />
        <button className="btn btn-info" onClick = {this.getNews.bind(this)}>Search News</button>
        <div><select className="form-control" onChange = {this.getNews.bind(this)} > {option}</select></div>
        <Newsfeeds articles={this.state.articles} 
        sourceName={this.state.currentValue.label}/>
      </div>
      
    );
  }
};