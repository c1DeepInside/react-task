import React, { Component } from 'react';
import '../../styles/search.scss';

export default class SearchComponent extends Component {
  render() {
    return (
      <div className="search__wrap">
        <input className="search" type="text" placeholder="Search..." />
        <button className="search__btn">Search</button>
      </div>
    );
  }
}
