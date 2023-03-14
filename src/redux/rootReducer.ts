import { combineReducers } from 'redux';

import { loaderReducer } from './reducers/loaderReduser';
import { usersReducer } from './reducers/usersReduser';

export const rootReducer = combineReducers({
  loader: loaderReducer,
  users: usersReducer,
});
