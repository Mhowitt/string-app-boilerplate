import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from '../StyledButton';
import './FormControl.css';

export default class FormControl extends React.Component {
  static propTypes = {
    createString: PropTypes.func,
    openCloseModal: PropTypes.func,
    isModalOpen: PropTypes.bool,
  };

  state = {
    string: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.string.length < 1) {
      console.log('error');
    } else {
      if (this.props.isModalOpen) {
        this.props.openCloseModal();
      }
      this.props.createString(this.state.string);
    }
  };

  render() {
    return (
      <div className="input-container">
        <input
          style={{
            background: 'transparent',
            marginLeft: '1%',
            marginRight: '1%',
          }}
          type="text"
          className="string-input"
          value={this.state.string}
          name="string"
          onChange={this.handleChange}
        />
        <StyledButton onClick={this.handleSubmit} type="primary">
          Add It!
        </StyledButton>
      </div>
    );
  }
}
