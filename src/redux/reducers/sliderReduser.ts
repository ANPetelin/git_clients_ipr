import { createSlice } from '@reduxjs/toolkit';

interface ISliderFields {
  node_id?: string;
  login?: string;
  score?: string;
  id?: string;
  type?: string;
}

export type ISliderFieldsKeys = keyof ISliderFields;

export interface ChangeFieldPayload {
  key: ISliderFieldsKeys;
  value: string;
}

interface ChangeFieldValuesAction {
  type: string;
  payload: ChangeFieldPayload;
}

interface ISliderState {
    isVisibleSlider: boolean;
    fields: ISliderFields;
}

const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    isVisibleSlider: true,
    fields: {},
  } as ISliderState,
  reducers: {
    switchSlider(state) {
      state.isVisibleSlider = !state.isVisibleSlider;
    },
    changeFieldValues(state, { payload }: ChangeFieldValuesAction) {
      state.fields[payload.key] = payload.value;
    },
    clearFieldValues(state) {
      state.fields = {};
    },
  },
});

export const { switchSlider, changeFieldValues, clearFieldValues } = sliderSlice.actions;
export const { reducer: sliderReducer } = sliderSlice;
