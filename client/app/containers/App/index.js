/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import StringContainer from 'containers/StringContainer/Loadable';
import CreateString from 'containers/CreateString/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import './App.css';
import Header from '../../components/Header';

export default function App() {
  return (
    <div className="main-container">
      <Header />
      <Switch>
        <Route path="/strings" component={StringContainer} />
        <Route path="/new" component={CreateString} />
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
