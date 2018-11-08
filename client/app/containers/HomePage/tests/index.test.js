import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../index';
import messages from '../messages';
import CreateString from '../../CreateString';

describe('<HomePage />', () => {
  it('should render the Create String Component with messages', () => {
    const createString = (
      <CreateString headerText={messages.header} titleText={messages.title} />
    );
    const renderedComponent = shallow(<HomePage>{createString}</HomePage>);
    expect(
      renderedComponent.contains(
        <CreateString
          headerText={messages.header}
          titleText={messages.title}
        />,
      ),
    ).toEqual(true);
  });
});
