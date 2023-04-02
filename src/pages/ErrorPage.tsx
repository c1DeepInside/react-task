import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ErrorPage extends Component {
  render() {
    return (
      <div>
        <h2>Error 404</h2>
        <NavLink to={'/'}>Click to go to the main page</NavLink>
      </div>
    );
  }
}
