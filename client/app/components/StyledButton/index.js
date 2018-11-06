import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => (props.type === 'primary' ? 'tomato' : 'white')};
  color: ${props => (props.type === 'primary' ? 'white' : 'tomato')};
  border: 1px solid ${props => (props.type === 'primary' ? null : 'tomato')};
  padding: 5px;
  width: 110px;
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
