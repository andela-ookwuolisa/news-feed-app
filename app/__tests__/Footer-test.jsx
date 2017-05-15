import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Footer from '../components/Footer';

describe('Test footer component', () => {
  it('the componenet should exist', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toBeTruthy();
  });

  it('it should contain footer text', () => {
    const wrapper = shallow(<Footer />);
    const message = 'Designed by Obinna Okwuolisa | © 2017';
    expect(wrapper.contains(message)).toBeTruthy();
  });
});
