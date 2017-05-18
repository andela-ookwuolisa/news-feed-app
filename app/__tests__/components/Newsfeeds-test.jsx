import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import expect from 'expect';
import Newsfeed from '../../components/Newsfeeds';
import DataMock from '../../__mocks__/DataMock.json';

describe('Test Newsfeeds component', () => {
  it('should have a Newsfeed componenet', () => {
    const wrapper = shallow(<Newsfeed />);
    expect(wrapper).toBeTruthy();
  });

  it('contains text-center class for h2 header', () => {
    const wrapper = mount(<Newsfeed />);
    expect(wrapper.find('.text-center')).toBeTruthy();
    expect(wrapper.contains(<h2 className="text-center" > CNN </h2>).toExist);
  });

  it('should call componentDidMount', () => {
    sinon.spy(Newsfeed.prototype, 'componentDidMount');
    mount(<Newsfeed />);
    expect(Newsfeed.prototype.componentDidMount.calledOnce).toEqual(true);
  });

  it('should render  <div /> component', () => {
    const wrapper = mount(<Newsfeed />);
    expect(wrapper.find('div').toExist);
    expect(wrapper.find('span').toNotExist);
  });

  it('it initializes with an array for newsFeeds', () => {
    const wrapper = mount(<Newsfeed />);
    expect(wrapper.node.state.articles).toBeAn('array');
  });
});

describe('Newsfeeds component', () => {
  it('should set articles state', () => {
    sinon.spy(Newsfeed.prototype, 'newsArticles');
    const wrapper = mount(<Newsfeed />);
    wrapper.setState({ articles: DataMock.data.articles });
    expect(Newsfeed.prototype.newsArticles).toBeTruthy();
    expect(wrapper.node.state.articles[0].author).toEqual('BBC News');
  });
});
