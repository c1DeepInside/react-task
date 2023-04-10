import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { gamesApi } from '../API/gamesAPI';
import formCardsSlice from './formCardsSlice';
import searchSlice from './searchSlice';

export const store = configureStore({
  reducer: {
    formCards: formCardsSlice,
    search: searchSlice,
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gamesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
