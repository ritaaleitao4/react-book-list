import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import Home from './views/Home';
import store from './store/store';

const Routes = () => (
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/:testRouting?" component={Home} />
      </Switch>
    </Router>
  </Provider>
);

export default Routes;
