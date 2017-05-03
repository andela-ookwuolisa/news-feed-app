import React from 'react';
import Nav from 'Nav';

export default ({children}) => {
  return (
    <div>
      <Nav />
      <h2>Main Component</h2>
      {children}
    </div>
  );
};
