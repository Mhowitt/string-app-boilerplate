import React from 'react';
import PropTypes from 'prop-types';

export default class StringListItem extends React.PureComponent {
  render() {
    return (
      <div>
        <div>Here's a string</div>
      </div>
    );
  }
}

StringListItem.propTypes = {
  stringData: PropTypes.string,
};
