import React from 'react'
import { connect } from 'react-redux';
import {
  Route,
  Redirect
} from 'react-router-dom';

class AuthRoute extends React.Component {

    render() {
        const { component: Component, authenticated, ...rest } = this.props;
        return (
            <Route {...rest} render={props => {
                if(authenticated)
                    return <Component {...props}/>;
                else if (authenticated === false) {
                    return <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>;
                } else {
                    return null;
                }
            }}/>
        );
    }
}

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  export default connect(mapStateToProps)(AuthRoute);