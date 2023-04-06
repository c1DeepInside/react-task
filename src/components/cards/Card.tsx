import React from 'react';

import { IGameList } from '../../interfaces/card';

type Props = {
  game: IGameList;
  onClick: (id: number) => () => void;
};

function Card({ game, onClick }: Props) {
  return (
    <>
      <div className="card__wrap" onClick={onClick(game.id)}>
        <img className="card__image" src={game.background_image} alt="photo" />
        <p className="card__name">{game.name}</p>
      </div>
    </>
  );
}

export default Card;
