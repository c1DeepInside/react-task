import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Navbar.module.scss';

interface Props {
  text?: string;
}

interface Pages {
  link: string;
  name: string;
}

export default class Navbar extends Component<Props, { currentPage: string; pages: Pages[] }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentPage: '',
      pages: [
        { name: 'Cards', link: '/' },
        { name: 'Forms', link: '/forms' },
        { name: 'About us', link: '/about' },
      ],
    };
  }

  componentDidMount() {
    const page = this.state.pages.find((page) => page.link === window.location.pathname);
    this.setState({ currentPage: String(page?.name) });
  }

  changeCurrentPage = (value: string) => {
    this.setState({ currentPage: value });
  };

  render() {
    return (
      <div className={cl.navbar}>
        <nav className={cl.nav}>
          {this.state.pages.map((page) => (
            <NavLink
              key={page.link}
              className={({ isActive }) =>
                isActive ? `${cl.nav__btn} ${cl.active__btn}` : `${cl.nav__btn}`
              }
              to={page.link}
              onClick={() => this.changeCurrentPage(page.name)}
            >
              {page.name}
            </NavLink>
          ))}
          <p className={cl.current__page}>{this.state.currentPage}</p>
        </nav>
      </div>
    );
  }
}
