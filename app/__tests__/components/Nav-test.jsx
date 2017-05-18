import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import User from '../../userModel/UserModel';
import Nav from '../../components/Nav';


const Response = { w3:
    { ig: 'prime', U3: 'prime@gmail', Paa: 'www.prime.com' }
};

describe('Test nav component', () => {
  beforeEach(() => {
    User.login(Response);
  });

  it('the componenet should exist', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper).toBeTruthy();
  });

  it('contains the class navbar and navbar-inverse', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.props().className).toBe('navbar navbar-inverse');
  });

  it('it should contain a link to the logout page', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find('Link')).toBeTruthy();
  });
});
