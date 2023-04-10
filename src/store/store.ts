import { configureStore } from '@reduxjs/toolkit';

import formCardsSlice from './formCardsSlice';
import searchSlice from './searchSlice';

export const store = configureStore({
  reducer: {
    formCards: formCardsSlice,
    search: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
