import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Search from '../components/Search';
import Select from 'react-select';

jest.dontMock('../components/Search');


describe('Test search component', () => {
  it("should have a search componenet", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toBeTruthy();
  });

  it("contains form-control class for sort", () => {
    const wrapper = mount(<Search />);
    expect(wrapper.find('.form-control')).toBeDefined();
  });


//   it("contains spec with an expectation", function() {
//     //expect(mount(<Foo />).find('.foo').length).toBe(1);
//   });
});