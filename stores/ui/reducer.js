import { createEntityAdapter, createReducer } from "@reduxjs/toolkit";
import { displayToast } from "./actions";

export const uiAdapter = createEntityAdapter({});

export const initialState = uiAdapter.getInitialState({
  toasts: [],
});

const uiReducer = createReducer(initialState, (builder) => {
  builder.addCase(displayToast, (state, action) => {
    state.toasts = [...state.toasts, { ...action.payload, dismissed: false }];
  });
});

export default uiReducer;
