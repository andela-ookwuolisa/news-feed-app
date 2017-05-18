import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';
import Search from '../../components/Search';
import SourceMock from '../../__mocks__/SourceMock.json';


describe('Test search component', () => {
  it('should have a search componenet', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toBeTruthy();
  });

  it('contains form-control class for sort', () => {
    const wrapper = mount(<Search />);
    expect(wrapper.find('.form-control')).toBeTruthy();
  });
  it('it initializes with an array for news source', () => {
    const wrapper = mount(<Search />);
    expect(wrapper.node.state.sources).toBeAn('array');
  });
});

describe('Test Search component', () => {
  it('should call handleSourceChange ', () => {
    sinon.spy(Search.prototype, 'handleSourceChange');
    const wrapper = mount(<Search />);
    wrapper.setState({ sources: SourceMock.sources });
    expect(Search.prototype.handleSourceChange).toBeTruthy();
  });
  it('should set sources state ', () => {
    const wrapper = mount(<Search />);
    wrapper.setState({ sources: SourceMock.sources });
    expect(wrapper.node.state.sources[0].id).toEqual('abc-news-au');
  });
});
