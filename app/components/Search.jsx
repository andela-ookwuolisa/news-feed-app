import React from 'react';
import Select from 'react-select';
import newsStore from 'NewsStore';
import NewsActions from 'NewsActions';
import Newsfeeds from 'Newsfeeds';

export default class Search extends React.Component{

  constructor(){
    super()
    this.state = {
       sources: [],
    currentValue:'',
    currentName:'',
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
getNews(){
  var newSite = this.state.currentValue.value;
  NewsActions.getNews(newSite);
  console.log(newSite);
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
    
      
    var options = this.state.sources.map((source)=>{
      return ({value: source.id,
        label:source.name})
    });
    console.log('current value',this.state.currentValue);


    return (
      <div>

        <Select
        name = "form-field-name"
        options = {options}
        value= {this.state.currentValue}
        onChange = {this.setValue.bind(this)}
        clearable={true}
        ref = "search-bar"
        />
        <button onClick = {this.getNews.bind(this)}>Search News</button>
        <Newsfeeds articles={this.state.articles} 
        sourceName={this.state.currentValue.label}/>
      </div>
      
    );
  }
};