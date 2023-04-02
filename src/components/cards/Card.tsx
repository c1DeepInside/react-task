import { Component } from 'react';
import { ICard } from '../../interfaces/card';

type Props = {
  card: ICard;
};

export default class Card extends Component<Props, { card: ICard }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      card: props.card,
    };
  }

  render() {
    return (
      <div className="card__wrap">
        <img className="card__image" src={this.state.card.image} alt="photo" />
        <div className="card__info">
          <p className="card__name">
            {this.state.card.id}. {this.state.card.name}
          </p>
          <p className="card__description">{this.state.card.description}</p>
          <p className="card__likes">❤ {this.state.card.likes}</p>
        </div>
      </div>
    );
  }
}
