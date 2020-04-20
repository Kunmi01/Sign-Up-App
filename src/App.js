import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Header from './components/Header';
import signUpRoutes from './components/SignUp/routes';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          {signUpRoutes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={() => <route.component />}
            />
          ))}
          <Redirect to="/user" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
