import React from 'react';
import CardsComponent from '../components/cards/CardsComponent';
import SearchComponent from '../components/cards/SearchComponent';
import '../styles/cards.scss';

function CardsPage() {
  return (
    <div className="cards">
      <SearchComponent />
      <CardsComponent />
    </div>
  );
}

export default CardsPage;
