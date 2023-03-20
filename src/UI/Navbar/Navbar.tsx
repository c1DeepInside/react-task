import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Navbar.module.scss';

interface Props {
  text?: string;
}

export default class Navbar extends Component<Props, { currentPage: string }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentPage: '',
    };
  }

  componentDidMount() {
    this.setState({ currentPage: window.location.pathname === '/' ? 'Cards' : 'About us' });
  }

  changeCurrentPage = (value: string) => {
    this.setState({ currentPage: value });
  };

  render() {
    return (
      <div className={cl.navbar}>
        <nav className={cl.nav}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${cl.nav__btn} ${cl.active__btn}` : `${cl.nav__btn}`
            }
            to="/"
            onClick={() => this.changeCurrentPage('Cards')}
          >
            Cards
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${cl.nav__btn} ${cl.active__btn}` : `${cl.nav__btn}`
            }
            to="/about"
            onClick={() => this.changeCurrentPage('About us')}
          >
            About us
          </NavLink>
          <p className={cl.current__page}>{this.state.currentPage}</p>
        </nav>
      </div>
    );
  }
}
