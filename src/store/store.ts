import { configureStore } from '@reduxjs/toolkit';

import formCardsSlice from './formCardsSlice';

export const store = configureStore({
  reducer: {
    formCards: formCardsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
