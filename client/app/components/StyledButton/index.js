import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => (props.type === 'primary' ? '#ff4625' : 'white')};
  color: ${props => (props.type === 'primary' ? 'white' : '#ff4625')};
  border: ${props => (props.type === 'primary' ? 'none' : '1px solid #ff4625')};
  padding: 10px;
  width: 120px;
  border-radius: 5px;
`;
export default class StyledButton extends React.PureComponent {
  render() {
    const { onClick, type } = this.props;
    return (
      <Button onClick={onClick} type={type}>
        {this.props.children}
      </Button>
    );
  }
}

StyledButton.propTypes = {
  // text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node,
};
