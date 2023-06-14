import { combineReducers, configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'

import { loaderReducer } from './reducers/loaderReduser';
import { usersReducer } from './reducers/usersReduser';
import { StateModel } from './store';
import { sliderReducer } from './reducers/sliderReduser';
import { sortPaginationReducer } from './reducers/sortPaginationReduser';
import { selectUserReducer } from './reducers/selectUserReduser';

export const rootReducer = combineReducers({
  loader: loaderReducer,
  users: usersReducer,
  slider: sliderReducer,
  sortPagination: sortPaginationReducer,
  selectedUser: selectUserReducer,
});

export const setupStore = (preloadedState?: PreloadedState<StateModel>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type AppStore = ReturnType<typeof setupStore>
