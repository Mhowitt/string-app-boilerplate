/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import StringContainer from 'containers/StringContainer/Loadable';
import CreateString from 'containers/CreateString/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from '../../components/Header/Loadable';

import GlobalStyle from '../../global-styles';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openCloseModal = () => {
    if (this.state.isModalOpen) {
      this.setState({ isModalOpen: false });
      this.props.history.push('/strings');
    } else {
      this.setState({ isModalOpen: true });
    }
  };

  render() {
    const { location } = this.props;
    return (
      <div className="main-container">
        <Header location={location} onClick={this.openCloseModal} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/strings"
            render={props => (
              <StringContainer
                openCloseModal={this.openCloseModal}
                isModalOpen={this.state.isModalOpen}
                {...props}
              />
            )}
          />
          <Route path="/new" component={CreateString} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </div>
    );
  }
}
export default withRouter(App);
