import React from 'react';
import { shallow, mount, render } from 'enzyme';
import expect from 'expect';
import Search from '../components/Search';


describe('Test search component', () => {
  it('should have a search componenet', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toBeTruthy();
  });

  it('contains form-control class for sort', () => {
    const wrapper = mount(<Search />);
    expect(wrapper.find('.form-control')).toExist;
  });
  it('it initializes with an array for news source', () => {
    const wrapper = mount(<Search />);
    expect(wrapper.node.state.sources).toBeAn('array');
  });
});
