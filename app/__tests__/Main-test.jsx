import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Main from '../components/Main';

/*eslint-disable*/
describe('Test Main component', () => {
  it('the componenet should exist', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toBeTruthy();
  });
});
