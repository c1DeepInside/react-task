import React, { Component } from 'react';
import SearchComponent from '../components/cards/SearchComponent';
import '../styles/Cards.scss';

export default class About extends Component {
  render() {
    return (
      <div className="cards">
        <SearchComponent />
      </div>
    );
  }
}
