import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './UI/navbar/Navbar';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Outlet />
      </div>
    );
  }
}
