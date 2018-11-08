import React from 'react';
import { mount } from 'enzyme';

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
    const children = <h1>Test</h1>;
    const renderedComponent = mount(
      <Provider store={store}>
        {' '}
        <StringContainer>{children}</StringContainer>
      </Provider>,
    );
    expect(renderedComponent.find('h1').children()).toBe(true);
  });

  it('should render at least one StringListItem', () => {
    const strings = ['i heart strings', 'test', 'tester'];
    const renderedComponent = mount(
      <Provider store={store}>
        <StringContainer>
          {strings.map(string => (
            <StringListItem string={string} />
          ))}
        </StringContainer>
      </Provider>,
    );
    expect(renderedComponent.find(StringListItem).children()).toHaveLength(3);
  });
});
