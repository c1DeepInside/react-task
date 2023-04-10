import React, { useState } from 'react';

import { useGetGameQuery, useGetGamesQuery } from '../../API/gamesAPI';
import { useAppSelector } from '../../hooks/redux';
import Loader from '../../UI/Loader/Loader';
import Card from './Card';
import GameModal from './GameModal';

function CardsComponent() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentId, setCurrentId] = useState(1);

  const searchStorage = useAppSelector((state) => state.search.search);
  const { data: games, isFetching: isGamesLoading } = useGetGamesQuery({
    search: searchStorage,
    page_size: 25,
  });
  const { data: game, isFetching: isGameLoading } = useGetGameQuery(currentId);

  const showGame = (id: number) => async () => {
    setCurrentId(id);
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <div className="cards__wrap">
      <h2 className="cards__text">Games:</h2>
      <hr className="hr" />
      <div className="cards__field">
        {isGamesLoading ? (
          <div className="loader__wrap">
            <Loader />
          </div>
        ) : !games?.results.length ? (
          <p className="cards__empty">Games not found</p>
        ) : (
          games.results.map((game) => <Card key={game.id} game={game} onClick={showGame} />)
        )}
      </div>
      {isShowModal && (
        <GameModal isShowLoader={isGameLoading} closeModal={closeModal} game={game} />
      )}
    </div>
  );
}

export default CardsComponent;
