import React, { Component } from 'react';
import CustomForm from '../components/forms/CustomForm';
import FormCardComponent from '../components/forms/FromCardComponent/FormCardComponent';
import { IFormCard } from '../interfaces/forms';
import '../styles/forms.scss';

type Props = {
  text?: string;
};

type State = {
  cards: IFormCard[];
  isShowMessage: boolean;
};

class FormsPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cards: [],
      isShowMessage: false,
    };
  }

  addCard = (card: IFormCard) => {
    this.setState({ cards: [...this.state.cards, card] });
    this.setState({ isShowMessage: true });
    setTimeout(() => {
      this.setState({ isShowMessage: false });
    }, 1000);
  };

  render() {
    return (
      <div className="forms_page">
        <CustomForm addCard={this.addCard} />
        <hr className="hr" />
        <div className="form__cards__wrap">
          {this.state.cards.map((card) => (
            <FormCardComponent key={card.id} card={card} />
          ))}
        </div>
        <p className={this.state.isShowMessage ? 'success_active success' : 'success'}>
          The card was created successfully!
        </p>
      </div>
    );
  }
}

export default FormsPage;
