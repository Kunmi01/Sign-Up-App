import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Header from './components/Header';
import signUpRoutes from './components/SignUp/routes';
import './App.scss';

const App = ({ state }) => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          {signUpRoutes.map(route =>
            route.reachable(state) ? (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                render={() => <route.component />}
              />
            ) : (
              <Redirect key={route.path} to={route.fallbackPath} />
            )
          )}
          <Redirect to="/user" />
        </Switch>
      </Router>
    </div>
  );
};

App.propTypes = {
  state: PropTypes.shape({}).isRequired
};

export default connect(state => ({ state }))(App);
