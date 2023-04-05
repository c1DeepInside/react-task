import React from 'react';

import { IGameList } from '../../interfaces/card';
import Loader from '../../UI/Loader/Loader';
import Card from './Card';

type Props = {
  games: IGameList[];
  isGameLoading: boolean;
};

function CardsComponent({ games, isGameLoading }: Props) {
  return (
    <div className="cards__wrap">
      <h2 className="cards__text">Games:</h2>
      <hr className="hr" />
      <div className="cards__field">
        {isGameLoading ? (
          <div className="loader__wrap">
            <Loader />
          </div>
        ) : !games.length ? (
          <p className="cards__empty">Games not found</p>
        ) : (
          games!.map((game) => <Card key={game.id} card={game} />)
        )}
      </div>
    </div>
  );
}

export default CardsComponent;
