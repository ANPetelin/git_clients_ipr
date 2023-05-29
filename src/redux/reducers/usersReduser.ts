import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, LOCATION_POSTFIX } from './consts';
import { hideLoader, showLoader } from './loaderReduser';
import { StateModel } from 'src/redux/store';

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

interface FetchUsersData {
  items: IUsers[];
  total_count: number;
}

export const fetchUsers = createAsyncThunk<FetchUsersData, string | undefined, { rejectValue: string, state: StateModel }>(
  'fetchUsers',
  async function (params = '', { rejectWithValue, dispatch, getState }) {
    const state = getState();
    const { page, pageSize, sorter: { order, field } } = state.sortPagination;

    const sort = order ? `+sort:${field}-${order.includes('asc') ? 'asc' : 'desc'}` : '';
    
    dispatch(showLoader());
    const response = await fetch(`${BASE_URL}?q=${params}${LOCATION_POSTFIX}${sort}&page=${page}&per_page=${pageSize}`);
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
    items: [] as IUsers[],
    totalCountUser: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.totalCountUser = action.payload.total_count;
      });
  },
});

export const { reducer: usersReducer } = usersSlice;
