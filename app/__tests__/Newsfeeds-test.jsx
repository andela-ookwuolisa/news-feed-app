import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import expect from 'expect';
import Newsfeed from '../components/Newsfeeds';

/*eslint-disable*/
describe('Test Newsfeeds component', () => {
  it('should have a Newsfeed componenet', () => {
    const wrapper = shallow(<Newsfeed />);
    expect(wrapper).toBeTruthy();
  });

  it('contains text-center class for h2 header', () => {
    const wrapper = mount(<Newsfeed />);
    expect(wrapper.find('.text-center')).toExist;
    expect(wrapper.contains(<h2 className="text-center"></h2>).toExist);

  });

  it('calls componentDidMount', () => {
    sinon.spy(Newsfeed.prototype, 'componentDidMount');
    const wrapper = mount(<Newsfeed />);
    expect(Newsfeed.prototype.componentDidMount.calledOnce).toEqual(true);
  });
  it('calls componentWillUnMount', () => {
    const spy = sinon.spy();

    class Newsfeed extends React.Component {
      constructor(props) {
        super(props);
        this.componentWillUnmount = spy;
      }
      render() {
        return (
          <div className={this.props.id}>
            {this.props.id}
          </div>
        );
      }
    }
    const wrapper = shallow(<Newsfeed id="Newsfeed" />);
    expect(spy.calledOnce).toEqual(false);
    wrapper.unmount();
    expect(spy.calledOnce).toEqual(true);
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
describe('Test Newsfeeds component', () => {
  const data = [{
  title: 'Attempted suicide on Facebook Live has a happy ending',
  description: 'Facebook Live, for all its problems, may have just saved a girl',},
{
  title: 'Nigeria',
  description: 'Nigeria is a hub of uncutivated talents',
}];
it('allArticles', () => {
    sinon.spy(Newsfeed.prototype, 'allArticles');
    const wrapper = mount(<Newsfeed />);
    wrapper.setState({ articles: data })
    expect(Newsfeed.prototype.allArticles).toExist;
  });


});