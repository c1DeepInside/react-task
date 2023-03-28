import React, { Component } from 'react';
import CardsComponent from '../components/cards/CardsComponent';
import SearchComponent from '../components/cards/SearchComponent';
import '../styles/cards.scss';

export default class About extends Component {
  render() {
    return (
      <div className="cards">
        <SearchComponent />
        <CardsComponent />
      </div>
    );
  }
}
