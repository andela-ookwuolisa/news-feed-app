import React from 'react';
import { shallow, mount, render } from 'enzyme';
import expect from 'expect';
import Newsfeed from '../components/Newsfeeds';


describe('Test Newsfeeds component', () => {
  it('should have a Newsfeed componenet', () => {
    const wrapper = shallow(<Newsfeed />);
    expect(wrapper).toBeTruthy();
  });

  it('contains text-center class for h2 header', () => {
    const wrapper = mount(<Newsfeed />);
    expect(wrapper.find('.text-center')).toExist;
  });
  xit('it initializes with an array for newsFeeds', () => {
    const wrapper = mount(<Newsfeed />);
    expect(wrapper.node.state.articles).toBeAn('array');
    console.log('hhhhhhhhhhhhhh',wrapper);
  });
});
