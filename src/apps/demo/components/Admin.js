import React from 'react';


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
