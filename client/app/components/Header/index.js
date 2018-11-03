import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import StyledButton from '../StyledButton';

export default class Header extends React.PureComponent {
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-title">All You Can String!</div>
        <div className="header-button">
          <StyledButton type="primary" onClick={this.props.onClick}>
            Add A String
          </StyledButton>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  onClick: PropTypes.func,
};
