import React from 'react';

import { IGameList } from '../../interfaces/card';
import Card from './Card';

type Props = {
  games: IGameList[];
};

function CardsComponent({ games }: Props) {
  return (
    <div className="cards__wrap">
      <h2 className="cards__text">Games:</h2>
      <hr className="hr" />
      <div className="cards__field">
        {!games.length ? (
          <p className="cards__empty">Games not found</p>
        ) : (
          games!.map((game) => <Card key={game.id} card={game} />)
        )}
      </div>
    </div>
  );
}

export default CardsComponent;
