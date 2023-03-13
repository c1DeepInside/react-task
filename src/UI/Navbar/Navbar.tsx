import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={cl.navbar}>
      <nav className={cl.nav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${cl.nav__btn} ${cl.active__btn}` : `${cl.nav__btn}`
          }
          to="/"
        >
          Cards
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${cl.nav__btn} ${cl.active__btn}` : `${cl.nav__btn}`
          }
          to="/about"
        >
          About us
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
