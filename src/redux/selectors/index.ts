import { createSelector } from '@reduxjs/toolkit';

import { StateModel } from '../store';

export const getState = (state: StateModel) => state;
export const getLoader = (state: StateModel) => state.loader.loading;
export const getIsVisibleSlider = (state: StateModel) => state.slider.isVisibleSlider;
export const getSliderFields = (state: StateModel) => state.slider.fields;
export const getSortPaginationData = (state: StateModel) => state.sortPagination;
export const getTotalCountUser = (state: StateModel) => state.users.total_count;
export const getFetchError = (state: StateModel) => state.users.error;
export const getSelectedUser = (state: StateModel) => state.selectedUser.selectedUser;

export const selectUsers = createSelector(
    [getState],
    (state) => state.users.items,
)