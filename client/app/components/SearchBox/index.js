import React from 'react';

export default class SearchBox extends React.Component {
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.setAutoFocus) {
  //     this.inputRef.focus();
  //   }
  // }

  render() {
    return (
      <div className="a-search-box-container ">
        <input
          className="a-search-input"
          type="text"
          value={this.props.value}
          autoFocus
          onChange={e => this.props.onChange(e.target.value)}
          placeholder="Search Strings..."
          ref={input => {
            this.inputRef = input;
          }}
          onKeyDown={this.handleSubmit}
        />
      </div>
    );
  }
}
