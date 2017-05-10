import React from 'react';
import { shallow, mount, render } from 'enzyme';
import expect from 'expect';
import Main from '../components/Main';

/*eslint-disable*/
describe('Test nav component', () => {
  it('the componenet should exist', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toBeTruthy();
  });
});
