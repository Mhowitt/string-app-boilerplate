import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from '../StyledButton';
import './FormControl.css';

export default class FormControl extends React.Component {
  static propTypes = {
    createString: PropTypes.func,
    openCloseModal: PropTypes.func,
    isModalOpen: PropTypes.bool,
    changeValue: PropTypes.func,
    formValue: PropTypes.func,
  };

  state = {
    string: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    /* TODO: better handling of validation errors but for now this
    makes sure that the user is entering valid characters
    and not just spaces  */
    if (!this.state.string || this.state.string.trim() === undefined) {
      console.log('error');
    } else {
      if (this.props.isModalOpen) {
        this.props.openCloseModal();
      }
      this.props.createString(this.state.string.toString());
    }
  };

  render() {
    return (
      <div className="input-container">
        <input
          type="text"
          className="string-input"
          value={this.state.string}
          name="string"
          onChange={this.handleChange}
        />
        <StyledButton
          onClick={this.handleSubmit}
          type={!this.props.isModalOpen ? 'primary' : null}
        >
          Add It!
        </StyledButton>
      </div>
    );
  }
}
