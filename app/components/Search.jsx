var React = require('react');

var Search = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var newsSite = this.refs.newsSite.value;
    
    if (newsSite.length > 0){
      this.refs.newsSite.value = "";
      this.props.onSearch(newsSite.toLowerCase());
    }

  },
  render: function () {
    return (
      <div>
        <form onSubmit ={this.onFormSubmit} >
            <input type ="text" ref="newsSite"/>
            <button>Search News</button>
        </form>
      </div>
    );
  }
});

module.exports = Search;