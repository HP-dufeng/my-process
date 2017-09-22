import React from 'react';
import { connect } from 'react-redux';

import {checkIsLogin} from '../../auth/actions/authActions';

class Admin extends React.Component {

    // componentDidMount() {
    //     this.props.checkIsLogin();
    // }

  render() {
    // if (!this.props.authenticated) {
    //   return (
    //     <p>Access denied. Redirecting back home.</p>
    //   );
    // }

    return (
        <p>Access granted</p>
    );
  }
}

// function mapStateToProps(state) {
//     return {
//         authenticated: state.auth.authenticated
//     }
// }

export default Admin;
