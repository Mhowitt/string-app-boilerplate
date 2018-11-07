import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: 'fixed';
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: 'rgba(0,0,0,0.8)';
  padding: 50;
`;

const ModalContainer = styled.div`
  background-color: '#fff';
  border-radius: 5;
  position: absolute;
  top: 50%;
  width: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30;
`;

const ModalHeader = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 40px;
`;

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <ModalBackdrop>
        <ModalContainer>
          <ModalHeader>
            <button onClick={this.props.onClose}>X</button>
          </ModalHeader>
          {this.props.children}
        </ModalContainer>
      </ModalBackdrop>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
