var React = require('react');
var Select = require('react-select');
import newsStore from '../stores/newsStore';
var NewsActions = require('NewsActions');

//import 'react-select/dist/react-select.css';

var Search = React.createClass({

  getInitialState() {
  return {
    sources: [],
    currentValue:''
  }
},

componentWillMount() {
   NewsActions.displaySource()
  newsStore.addChangeListener(this.handleSourceChange);
},

componentWillUnmount() {
  newsStore.removeChangeListener(this.handleSourceChange);
},
handleSourceChange() {
  this.setState({
    sources: newsStore.displaySource(),
    

  })
},
setValue(val){
  if(val){
    this.setState({
      currentValue: val
    });
  }
},
getNews(){
  var newSite = this.state.currentValue.value;
  NewsActions.getNews(newSite);
  console.log(newSite);
},

  




  // onFormSubmit: function(e) {
  //   e.preventDefault();
  //   var newsSite = this.refs.newsSite.value;
    
  //   if (newsSite.length > 0){
  //     this.refs.newsSite.value = "";
  //     this.props.onSearch(newsSite.toLowerCase());
  //   }

  // },

  
  render: function () {
    
    console.log('Search bar',this.state.sources);
     function logChange() {
  console.log("Selected: ");
      }
    var options = this.state.sources.map(function(source){
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
        onChange = {this.setValue}
        clearable={true}
        ref = "search-bar"
        />
        <button onClick = {this.getNews}>Search News</button>
      </div>
      
    );
  }
});

module.exports = Search;