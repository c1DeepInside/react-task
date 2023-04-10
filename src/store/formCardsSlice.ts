import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { FormCard } from '../interfaces/forms';

type formCardsState = {
  cards: FormCard[];
  showMessage: boolean;
};

const initialState: formCardsState = {
  cards: [],
  showMessage: false,
};

export const formCardsSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<FormCard>) {
      state.cards.push(action.payload);
    },
    setShowMessage(state, action: PayloadAction<boolean>) {
      state.showMessage = action.payload;
    },
  },
});

export const { addCard, setShowMessage } = formCardsSlice.actions;

export default formCardsSlice.reducer;
