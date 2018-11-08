import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => (props.type === 'primary' ? '#ff4625' : 'white')};
  color: ${props => (props.type === 'primary' ? 'white' : '#ff4625')};
  border: ${props =>
    props.type === 'primary' ? '1px solid #ff4625' : '1px solid #ff4625'};
  padding: 10px;
  width: 120px;
  border-radius: 5px;
  transition: width 0.6s linear;

  &:hover {
    width: 150px;

`;

const CloseButton = styled.button`
  background: transparent;
  width: 50px;
  font-weight: bold;
  color: white;
`;
export default class StyledButton extends React.PureComponent {
  render() {
    const { onClick, type } = this.props;
    const ButtonType = this.props.type === 'close' ? CloseButton : Button;
    return (
      <ButtonType onClick={onClick} type={type}>
        {this.props.children}
      </ButtonType>
    );
  }
}

StyledButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node,
};
