import React, { Component } from 'react';
import CustomForm from '../components/forms/CustomForm';
import FormCardComponent from '../components/forms/FromCardComponent/FormCardComponent';
import { FormCard } from '../interfaces/forms';
import '../styles/forms.scss';

interface Props {
  text?: string;
}

interface State {
  cards: FormCard[];
}

class FormsPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  addCard = (card: FormCard) => {
    this.setState({ cards: [...this.state.cards, card] });
    console.log(card);
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
      </div>
    );
  }
}

export default FormsPage;
