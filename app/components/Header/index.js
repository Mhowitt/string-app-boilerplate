import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import StyledButton from '../StyledButton';

export default class Header extends React.PureComponent {
  render() {
    return (
      <div className="header-wrapper">
        <div>All You Can String!</div>
        <StyledButton
          type="primary"
          text="Add A String"
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}

Header.propTypes = {
  onClick: PropTypes.func,
};
