import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type searchState = {
  search: string;
};

const initialState: searchState = {
  search: '',
};

const searchSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    setStorageSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setStorageSearch } = searchSlice.actions;

export default searchSlice.reducer;
