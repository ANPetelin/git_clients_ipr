import { createSlice } from '@reduxjs/toolkit';

export interface ILoaderState {
  loading: boolean;
}

const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    loading: false,
  },
  reducers: {
    showLoader(state) {
      state.loading = true;
    },
    hideLoader(state) {
      state.loading = false;
    },
  },
});

export const { showLoader, hideLoader } = loaderSlice.actions;
export const { reducer: loaderReducer } = loaderSlice;
