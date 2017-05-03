import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Nav from '../components/Nav';

jest.dontMock('../components/Nav');


describe('Test nav component', () => {
  it("the componenet should exist", () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper).toBeTruthy();
    //expect(wrapper).to.be.present();
  });

  it("contains the class navbar and navbar-inverse", () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.props().className).toBe('navbar navbar-inverse');
  });


//   it("contains spec with an expectation", function() {
//     //expect(mount(<Foo />).find('.foo').length).toBe(1);
//   });
});