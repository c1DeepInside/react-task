import React from 'react';

import { IGame } from '../../interfaces/card';
import Loader from '../../UI/Loader/Loader';

type Props = {
  isShowLoader: boolean;
  closeModal: () => void;
  game: IGame | undefined;
};

const GameModal = ({ isShowLoader, closeModal, game }: Props) => {
  return (
    <>
      <div className="modal__shadow" onClick={closeModal}></div>
      <div className="modal__wrap">
        <div className="modal">
          <div className="modal__close" onClick={closeModal}>
            ✕
          </div>
          {isShowLoader ? (
            <div className="modal__loader__wrap">
              <Loader />
            </div>
          ) : game ? (
            <div className="game__wrap">
              <img className="game__img" src={game.background_image} alt="game__img" />
              <p className="game__name">{game.name}</p>
              <p className="game__description">{game.description_raw}</p>
              <p className="game__metascore">
                Metascore: {game.metacritic ? game.metacritic : 'no info'}
              </p>
              <p className="game__date">Released: {game.released ? game.released : 'no info'}</p>
            </div>
          ) : (
            <div>Game not found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default GameModal;
