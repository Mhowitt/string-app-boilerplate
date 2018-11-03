import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from '../StyledButton';
import './FormControl.css';

export default class FormControl extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    string: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
  };

  render() {
    return (
      <div className="input-container">
        <label htmlFor="string">String</label>
        <input
          style={{
            background: 'white',
            width: '200px',
            height: '20px',
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
