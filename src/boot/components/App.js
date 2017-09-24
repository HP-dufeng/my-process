/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { red, purple, green } from 'material-ui/colors';

import { AuthRoute, LoginPage } from '../../auth/components';
import Demo from '../../demo/components/Demo';
import Admin from '../../demo/components/Admin'; 

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {

    return (
      <MuiThemeProvider theme={theme}>
      <Switch>
          <Route path="/login" component={LoginPage} />
          <AuthRoute path='/admin' component={ Admin } />
          <Route path="/" component={Demo} />
      </Switch>
      </MuiThemeProvider>
    );
  }
}

const theme = createMuiTheme({
  // palette: {
  //   primary: purple, // Purple and green play nicely together.
  //   secondary: {
  //     ...green,
  //     A400: '#00e677',
  //   },
  //   error: red,
  // },
});

App.propTypes = {
  children: PropTypes.element
};


export default App;
