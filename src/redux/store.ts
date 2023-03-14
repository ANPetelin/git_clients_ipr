import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});

export type StateModel = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
