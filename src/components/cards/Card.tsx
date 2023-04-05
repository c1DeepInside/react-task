import React from 'react';

import { IGameList } from '../../interfaces/card';

interface Props {
  card: IGameList;
}

function Card({ card }: Props) {
  return (
    <div className="card__wrap">
      <img className="card__image" src={card.background_image} alt="photo" />
      <p className="card__name">{card.name}</p>
    </div>
  );
}

export default Card;
