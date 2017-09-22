/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import { AuthRoute } from '../../auth/components';
import Demo from '../../demo/components/Demo';
import Admin from '../../demo/components/Admin';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {

    return (
      <Switch>
          <AuthRoute path='/admin' component={ Admin } />
          <Route path="/" component={Demo} />
      </Switch>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};


export default App;
