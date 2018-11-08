import React from 'react';
import { mount, shallow } from 'enzyme';

import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import configureStore from '../../../configureStore';

import StringContainer from '../index';
import StringListItem from '../../../components/StringListItem';

describe('<StringContainer />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('StringContainer renders without crashing', () => {
    mount(
      <Provider store={store}>
        <StringContainer />
      </Provider>,
    );
  });

  it('should render its children', () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        {' '}
        <StringContainer className="test-continer">
          <h1>Test</h1>
        </StringContainer>
      </Provider>,
    );
    expect(renderedComponent.find('.test-continer').length).toBe(1);
  });

  it('should render at least one StringListItem', () => {
    const renderedComponent = mount(
      <Provider store={store}>
        <StringContainer className="test-string">
          <StringListItem string="test" />
        </StringContainer>
      </Provider>,
    );
    expect(renderedComponent.find('.test-string').children().length).toBe(2);
  });
});
