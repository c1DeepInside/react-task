import React, { Component } from 'react';
import { ICard } from '../../interfaces/card';
import { cards } from '../../storage/cards';
import Card from './Card';

type Props = {
  text?: string;
};

export default class CardsComponent extends Component<Props, { cards: ICard[] }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cards: cards,
    };
  }

  render() {
    return (
      <div className="cards__wrap">
        <h2 className="cards__text">Cards:</h2>
        <hr className="hr" />
        <div className="cards__field">
          {this.state.cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    );
  }
}
