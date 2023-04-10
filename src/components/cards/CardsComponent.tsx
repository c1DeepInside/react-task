import React, { useState } from 'react';

import { getGame } from '../../API/getGames';
import { IGame, IGameList } from '../../interfaces/card';
import Loader from '../../UI/Loader/Loader';
import Card from './Card';
import GameModal from './GameModal';

type Props = {
  games: IGameList[];
  isGamesLoading: boolean;
};

function CardsComponent({ games, isGamesLoading }: Props) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isModalLoader, setIsModalLoader] = useState(false);
  const [currentGame, setCurrentGame] = useState<IGame>();

  const showGame = (id: number) => async () => {
    setIsModalLoader(true);
    setIsShowModal(true);
    const game = await getGame(id);
    setCurrentGame(game);
    setIsModalLoader(false);
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
        ) : !games.length ? (
          <p className="cards__empty">Games not found</p>
        ) : (
          games.map((game) => <Card key={game.id} game={game} onClick={showGame} />)
        )}
      </div>
      {isShowModal && (
        <GameModal isShowLoader={isModalLoader} closeModal={closeModal} game={currentGame} />
      )}
    </div>
  );
}

export default CardsComponent;
