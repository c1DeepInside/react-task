import React from 'react';

import { ICard } from '../../interfaces/card';

interface Props {
  card: ICard;
}

function Card({ card }: Props) {
  return (
    <div className="card__wrap">
      <img className="card__image" src={card.image} alt="photo" />
      <div className="card__info">
        <p className="card__name">
          {card.id}. {card.name}
        </p>
        <p className="card__description">{card.description}</p>
        <p className="card__likes">❤ {card.likes}</p>
      </div>
    </div>
  );
}

export default Card;
