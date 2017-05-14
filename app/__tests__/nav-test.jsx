import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Nav from '../components/Nav';

/*eslint-disable*/
describe('Test nav component', () => {
  it('the componenet should exist', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper).toBeTruthy();
  });

  it('contains the class navbar and navbar-inverse', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.props().className).toBe('navbar navbar-inverse');
  });

  it('it should contain a link to the logout page', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find('Link')).toExist;
  });
});
