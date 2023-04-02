import React, { useState } from 'react';
import { ICard } from '../../interfaces/card';
import { cardsForPage } from '../../storage/cards';
import Card from './Card';

function CardsComponent() {
  const [cards] = useState<ICard[]>(cardsForPage);

  return (
    <div className="cards__wrap">
      <h2 className="cards__text">Cards:</h2>
      <hr className="hr" />
      <div className="cards__field">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default CardsComponent;
