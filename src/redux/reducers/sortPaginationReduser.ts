import { createSlice } from '@reduxjs/toolkit';
import { SorterResult } from 'antd/es/table/interface';
import { IUsers } from 'src/redux/reducers/usersReduser';

export interface ChangePaginationPagePayload {
  page: number;
  pageSize: number;
}

export interface ChangeSorterPayload {
  sorter: SorterResult<IUsers>;
}

interface ChangeSorterAction {
  type: string;
  payload: ChangeSorterPayload;
}

interface ChangePaginationPageAction {
  type: string;
  payload: ChangePaginationPagePayload;
}

interface ISortPaginationState {
    page: number;
    pageSize: number;
    sorter: Pick<SorterResult<IUsers>, 'field' | 'order'>;
}

const sortPaginationSlice = createSlice({
  name: 'sortPagination',
  initialState: {
    page: 1,
    pageSize: 10,
    sorter: {},
  } as ISortPaginationState,
  reducers: {
    resetPagination(state) {
      state.page = 1;
      state.pageSize = 10;
    },
    changePagination(state, { payload }: ChangePaginationPageAction) {
      state.page = payload.page;
      state.pageSize = payload.pageSize;
    },
    changeSorter(state, { payload }: ChangeSorterAction) {
      state.sorter.order = payload.sorter.order;
      if (typeof payload.sorter.field === 'string') {
        state.sorter.field = payload.sorter.field;
      }
    },
  },
});

export const { changePagination, changeSorter, resetPagination } = sortPaginationSlice.actions;
export const { reducer: sortPaginationReducer } = sortPaginationSlice;
