import React from 'react';
import { NavLink } from 'react-router-dom';

function ErrorPage() {
  return (
    <div>
      <h2>Error 404</h2>
      <NavLink to={'/'}>Click to go to the main page</NavLink>
    </div>
  );
}

export default ErrorPage;
