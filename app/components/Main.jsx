import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/Nav';
import Footer from './Footer';

const Main = ({ children }) => (
  <div>
    <Nav />
    {children}
    <Footer />
  </div>
  );
Main.propTypes = {
  children: PropTypes.element,
};
Main.defaultProps = {
  children: null,
};
export default Main;
