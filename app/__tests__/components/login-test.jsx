import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Login from '../../components/Login';

describe('Test Login component', () => {
  it('the componenet should exist', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toBeTruthy();
  });

  it('it should contain Login text', () => {
    const wrapper = shallow(<Login />);
    const message = 'Welcome to News Hub';
    expect(wrapper.contains(message)).toBeTruthy();
  });
});
