import '../styles/Cards.scss';

import React, { useState } from 'react';

import { getGames } from '../API/getGames';
import CardsComponent from '../components/cards/CardsComponent';
import SearchComponent from '../components/cards/SearchComponent';
import { IAPIRequest, IGameList } from '../interfaces/card';

function CardsPage() {
  const [games, setGames] = useState<IGameList[]>([]);
  const [isGamesLoading, setIsGamesLoading] = useState(false);

  const startSearch = async (search: string) => {
    setIsGamesLoading(true);
    const result: IAPIRequest = await getGames(search, 25);
    setGames(result.results);
    setIsGamesLoading(false);
  };

  return (
    <div className="cards">
      <SearchComponent startSearch={startSearch} />
      <CardsComponent games={games} isGameLoading={isGamesLoading} />
    </div>
  );
}

export default CardsPage;
