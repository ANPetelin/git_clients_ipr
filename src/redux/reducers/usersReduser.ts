import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, LOCATION_POSTFIX } from './consts';
import { hideLoader, showLoader } from './loaderReduser';

export interface IUsers {
  id: number;
  login: string;
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  score: number;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

export const fetchUsers = createAsyncThunk<{ items: IUsers[] }, string | undefined, { rejectValue: string }>(
  'fetchUsers',
  async function (params = '', { rejectWithValue, dispatch }) {
    dispatch(showLoader());
    const response = await fetch(`${BASE_URL}?q=${params}${LOCATION_POSTFIX}`);
    if (!response.ok) {
      return rejectWithValue('Ошибка в запросе юсеров');
    }
    const data = await response.json();
    dispatch(hideLoader());
    return data;
  },
);

const usersSlice = createSlice({
  name: 'user',
  initialState: {
    users: [] as IUsers[],
  },
  reducers: {
    setUsers(state) {
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, () => {
        showLoader();
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        hideLoader();
        state.users = action.payload.items;
      });
  },
});

export const { setUsers } = usersSlice.actions;
export const { reducer: usersReducer } = usersSlice;
