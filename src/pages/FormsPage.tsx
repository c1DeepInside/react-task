import '../styles/forms.scss';

import React from 'react';

import CustomForm from '../components/forms/CustomForm';
import FormCardComponent from '../components/forms/FromCardComponent/FormCardComponent';
import { useAppSelector } from '../hooks/redux';

function FormsPage() {
  const cards = useAppSelector((state) => state.formCards.cards);
  const showMessage = useAppSelector((state) => state.formCards.showMessage);

  return (
    <div className="forms_page">
      <CustomForm />
      <hr className="hr" />
      <div className="form__cards__wrap">
        {cards.map((card) => (
          <FormCardComponent key={card.id} card={card} />
        ))}
      </div>
      <p className={showMessage ? 'success_active success' : 'success'}>
        The card was created successfully!
      </p>
    </div>
  );
}

export default FormsPage;
