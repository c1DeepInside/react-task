import { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div className="card__wrap">
        <img
          className="card__image"
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png"
          alt="photo"
        />
        <div className="card__info">
          <p className="card__name">Alchemist</p>
          <p className="card__description">
            kekeli dlfkjsdkjnf sd flksad flk;asd fklasd klmfasdlk fasdkl fkl
          </p>
          <p className="card__likes">❤ 2228</p>
        </div>
      </div>
    );
  }
}
