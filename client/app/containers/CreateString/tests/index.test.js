import React from 'react';
import { mount, shallow } from 'enzyme';

import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import configureStore from '../../../configureStore';

import CreateString from '../index';

describe('<CreateString />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('CreateString renders without crashing', () => {
    mount(
      <Provider store={store}>
        <CreateString />
      </Provider>,
    );
  });

  it('should render the page message from the parent component', () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <CreateString headerText="tester" />
      </Provider>,
    );
    const header = renderedComponent.find('h1');
    console.log(renderedComponent.debug());

    expect(header.text()).toEqual('tester');
  });
});
