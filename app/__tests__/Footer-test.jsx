import React from 'react';
import { shallow, mount, render } from 'enzyme';
import expect from 'expect';
import Footer from '../components/Footer';


describe('Test footer component', () => {
  it('the componenet should exist', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toBeTruthy();
  });

  it('it should contain footerr text', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.contains('Designed by Obinna Okwuolisa | © 2017')).toBeTruthy();
  });
});
