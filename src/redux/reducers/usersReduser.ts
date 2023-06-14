import { createSlice, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { BASE_URL, LOCATION_POSTFIX } from './consts';
import { hideLoader, showLoader } from './loaderReduser';
import { StateModel } from 'src/redux/store';

export interface IUsers {
  key: number;
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
  error: SerializedError | null;
  
}

export const fetchUsers = createAsyncThunk<FetchUsersData, undefined, { rejectValue: string, state: StateModel }>(
  'fetchUsers',
  async function (_, { rejectWithValue, dispatch, getState }) {
    const {
      sortPagination: { page, pageSize, sorter: { order, field } },
      slider: { fields: { login, type } },
    } = getState();
    const queryLogin = login ? `user:${login} ` : '';
    const queryType = type ? `type:${type} ` : '';
    const params = queryType ? `${queryLogin}${queryType}&type=Users` : '';

    const sort = order ? `+sort:${field}-${order.includes('asc') ? 'asc' : 'desc'}` : '';
    
    dispatch(showLoader());
    const response = await fetch(`${BASE_URL}?q=${params}${LOCATION_POSTFIX}${sort}&page=${page}&per_page=${pageSize}`);
    if (!response.ok) {
      dispatch(hideLoader());
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
    total_count: 0,
    error: null,
  } as FetchUsersData,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.items = action.payload.items.map((item) => ({ ...item, key: item.id }));
        state.total_count = action.payload.total_count;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.error
      });
  },
});

export const { reducer: usersReducer } = usersSlice;
