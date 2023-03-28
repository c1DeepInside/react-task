import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import cl from './Navbar.module.scss';

interface Pages {
  link: string;
  name: string;
}

const pages: Pages[] = [
  { name: 'Cards', link: '/' },
  { name: 'Forms', link: '/forms' },
  { name: 'About us', link: '/about' },
];

function Navbar() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    const page = pages.find((page) => page.link === location.pathname);
    setCurrentPage(page!.name);
  }, [location]);

  return (
    <div className={cl.navbar}>
      <nav className={cl.nav}>
        {pages.map((page) => (
          <NavLink
            key={page.link}
            className={({ isActive }) =>
              isActive ? `${cl.nav__btn} ${cl.active__btn}` : `${cl.nav__btn}`
            }
            to={page.link}
            data-testid={page.name.replace(/ /g, '').toLowerCase() + '_link'}
          >
            {page.name}
          </NavLink>
        ))}
        <p className={cl.current__page} data-testid="page_name">
          {currentPage}
        </p>
      </nav>
    </div>
  );
}

export default Navbar;
