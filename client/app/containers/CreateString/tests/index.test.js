import React from 'react';
import { mount, shallow } from 'enzyme';
import { defineMessages, IntlProvider, translationMessages } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import configureStore from '../../../configureStore';

import CreateString from '../index';

describe('<CreateString />', () => {
  let store;
  const messages = defineMessages({
    someMessage: {
      id: 'some.id',
      defaultMessage: 'This is some default message',
      en: 'This is some en message',
    },
    otherMessage: {
      id: 'someOther.id',
      defaultMessage: 'This is some default other message',
      en: 'This is some en other message',
    },
  });
  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('CreateString renders without crashing', () => {
    mount(
      <Provider store={store}>
        <IntlProvider messages={translationMessages}>
          <CreateString
            headerText={messages.someMessage}
            titleText={messages.otherMessage}
          />
        </IntlProvider>
      </Provider>,
    );
  });

  it('should render the page message from the parent component', () => {
    const renderedComponent = mount(
      <Provider store={store}>
        <IntlProvider messages={translationMessages}>
          <CreateString
            headerText={messages.someMessage}
            titleText={messages.otherMessage}
          />
        </IntlProvider>
      </Provider>,
    );
    // const header = renderedComponent.find('h1');
    // console.log(renderedComponent.debug());

    expect(renderedComponent.find('h1').length).toBe(1);
  });
});
