import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => (props.type.primary ? 'tomato' : 'white')};
  color: ${props => (props.type.primary ? 'white' : 'tomato')};
  border: 1px solid ${props => (props.type.primary ? null : 'tomato')};
  padding: 5px 10px;
`;
export default class StyledButton extends React.PureComponent {
  render() {
    const { text, onClick, type } = this.props;
    return (
      <Button onClick={onClick} type={type}>
        {text}
      </Button>
    );
  }
}

StyledButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
