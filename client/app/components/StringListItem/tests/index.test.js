import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import StringListItem from '../index';

describe('<StringListItem />', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = shallow(<StringListItem string="test string" />);
  });

  it('renders a <div>', () => {
    wrapper = shallow(<StringListItem string="test string" />);
    expect(wrapper.text()).toEqual('test string');
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
