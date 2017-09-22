import React from 'react';

import { NavLink } from 'react-router-dom';
class Demo extends React.Component {

  render() {
    return (
        <div>
            <NavLink to="/admin">Admin</NavLink>
            <p>Index</p>
        </div>
    );
  }
}



export default Demo;
