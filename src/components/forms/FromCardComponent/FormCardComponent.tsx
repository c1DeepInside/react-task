import React, { Component } from 'react';
import { FormCard } from '../../../interfaces/forms';
import cl from './FormCardComponent.module.scss';

interface Props {
  card: FormCard;
}

class FormCardComponent extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className={cl.card}>
        <img className={cl.img} src={this.props.card.file} alt="avatar" />
        <p>Nickname: {this.props.card.name}</p>
        <p>Gender: {this.props.card.gender}</p>
        <p>Favorite language: {this.props.card.language}</p>
        <p>Yesterday: {this.props.card.date}</p>
      </div>
    );
  }
}

export default FormCardComponent;
