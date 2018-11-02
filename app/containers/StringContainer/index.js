import React, { Component } from 'react';

export default class StringContainer extends Component {
  state = { strings: [] };

  render() {
    return (
      <div>
        <h1>Strings</h1>
        {this.state.strings.length < 1 ? (
          <div>No Strings to Show</div>
        ) : (
          <div>There are strings</div>
        )}
      </div>
    );
  }
}
