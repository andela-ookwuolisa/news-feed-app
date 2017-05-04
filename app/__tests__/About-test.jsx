import React from 'react';
import { shallow } from 'enzyme';
import About from '../components/About';

jest.dontMock('../components/About');

describe('About component', () => {
  it('About component should render as expected', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.contains('Newshub is a one-stop collection of news headlines from the globe')).toBe(true);
  });
});
