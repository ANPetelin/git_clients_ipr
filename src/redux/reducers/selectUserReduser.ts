import { createSlice } from '@reduxjs/toolkit';

import { IUsers } from './usersReduser';

interface SelectUserAction {
  type: string;
  payload: IUsers;
}

const selectUserSlice = createSlice({
  name: 'selectUser',
  initialState: {
    selectedUser: null,
  } as {
    selectedUser: IUsers | null;
  },
  reducers: {
    selectUserAction(state, { payload }: SelectUserAction) {
      state.selectedUser = payload;
    },
    deleteUserAction(state) {
      state.selectedUser = null;
    },
  },
});

export const { selectUserAction, deleteUserAction } = selectUserSlice.actions;
export const { reducer: selectUserReducer } = selectUserSlice;
