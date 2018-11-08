import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';
import StyledButton from '../StyledButton';

export default class Header extends React.PureComponent {
  render() {
    const { location } = this.props;
    return (
      <div className="header-wrapper">
        <div className="header-title">
          <Link to="/">All You Can String!</Link>
        </div>
        {location.pathname === '/strings' ? (
          <div className="header-button">
            <StyledButton type="primary" onClick={this.props.onClick}>
              Add A String
            </StyledButton>
          </div>
        ) : null}
      </div>
    );
  }
}

Header.propTypes = {
  onClick: PropTypes.func,
  location: PropTypes.object,
};
