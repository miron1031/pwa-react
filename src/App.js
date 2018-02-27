import React, { Component } from 'react';

import { Provider } from 'react-redux'

import store from './store'

import createHistory from 'history/createBrowserHistory'
import { Route, Router } from 'react-router'

import { ArticleScreen, HomeScreen, ListScreen } from './Screens';

const history = createHistory()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/pwa/home" component={HomeScreen} />
            <Route path="/pwa/article" component={ArticleScreen} />
            <Route path="/pwa/list" component={ListScreen} />
          </div>
        </Router>
      </Provider>
    );
  }
}
