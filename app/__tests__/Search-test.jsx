import React from 'react';
import { shallow, mount, render } from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';
import Search from '../components/Search';

/*eslint-disable*/
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
describe('Test Search component', () => {
  const data = [{
  name: 'CNN News',
  id: 'cnn',},
{
  name: 'bbc news',
  description: 'bbc-news',
}];
it('handleSource change', () => {
    sinon.spy(Search.prototype, 'handleSourceChange');
    const wrapper = mount(<Search />);
    wrapper.setState({ sources: data })
    expect(Search.prototype.handleSourceChange).toExist;
  });


});
