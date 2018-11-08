import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import StyledButton from '../index';

describe('<StyledButton />', () => {
  let renderedComponent;
  it('renders', () => {
    renderedComponent = shallow(<StyledButton />);
  });
  it('matches snapshot', () => {
    const serialized = toJson(renderedComponent);
    expect(serialized).toMatchSnapshot();
  });

  it('renders its children', () => {
    const text = 'Submit';
    renderedComponent = shallow(<StyledButton>{text}</StyledButton>);
    expect(renderedComponent.contains(text)).toEqual(true);
  });

  it('handles clicks', () => {
    const onClickSimulate = jest.fn();
    renderedComponent = shallow(<StyledButton onClick={onClickSimulate} />);
    renderedComponent.find('button').simulate('click');
    expect(onClickSimulate).toHaveBeenCalled();
  });
});
