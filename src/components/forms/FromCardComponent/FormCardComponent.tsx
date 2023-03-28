import React from 'react';
import { FormCard } from '../../../interfaces/forms';
import cl from './FormCardComponent.module.scss';

interface Props {
  card: FormCard;
}

function FormCardComponent(props: Props) {
  return (
    <div className={cl.card}>
      <img className={cl.img} src={props.card.file} alt="avatar" />
      <p>Nickname: {props.card.name}</p>
      <p>Gender: {props.card.gender}</p>
      <p>Favorite language: {props.card.language}</p>
      <p>Yesterday: {props.card.date}</p>
    </div>
  );
}

export default FormCardComponent;
