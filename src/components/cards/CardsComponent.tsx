import React, { useState } from 'react';

import { IGameList } from '../../interfaces/card';
import Card from './Card';

function CardsComponent() {
  const [cards] = useState<IGameList[]>();

  return (
    <div className="cards__wrap">
      <h2 className="cards__text">Games:</h2>
      <hr className="hr" />
      <div className="cards__field">
        {!cards || !cards.length ? (
          <p className="cards__empty">Games not found</p>
        ) : (
          cards!.map((card) => <Card key={card.id} card={card} />)
        )}
      </div>
    </div>
  );
}

export default CardsComponent;
