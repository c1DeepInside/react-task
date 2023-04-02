import React, { useState } from 'react';
import CustomForm from '../components/forms/CustomForm';
import FormCardComponent from '../components/forms/FromCardComponent/FormCardComponent';
import { FormCard } from '../interfaces/forms';
import '../styles/forms.scss';

function FormsPage() {
  const [cards, setCards] = useState<FormCard[]>([]);
  const [isShowMessage, setIsShowMessage] = useState(false);

  const addCard = (card: FormCard) => {
    setCards([...cards, card]);
    setIsShowMessage(true);
    setTimeout(() => {
      setIsShowMessage(false);
    }, 1000);
  };

  return (
    <div className="forms_page">
      <CustomForm addCard={addCard} />
      <hr className="hr" />
      <div className="form__cards__wrap">
        {cards.map((card) => (
          <FormCardComponent key={card.id} card={card} />
        ))}
      </div>
      <p className={isShowMessage ? 'success_active success' : 'success'}>
        The card was created successfully!
      </p>
    </div>
  );
}

export default FormsPage;
