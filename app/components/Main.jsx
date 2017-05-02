import React from 'react';
import Nav from 'Nav';
import News from 'News';

export default class Main extends React.Component{
  
  render () {
    return (
      <div>
          <Nav/>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
};
