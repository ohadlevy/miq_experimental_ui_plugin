import React from 'react';
import { configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Welcome from './index';

configure({ adapter: new Adapter() });

describe('Nav component', () => {
  it('renders the navigation', () => {
    const wrapper = mount(<Welcome />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
