import React from 'react';
import PropTypes from 'prop-types';

const StringListItem = ({ string }) => {
  return (
    <div>
      <div>{string}</div>
    </div>
  );
};

export default StringListItem;

StringListItem.propTypes = {
  string: PropTypes.string,
};
