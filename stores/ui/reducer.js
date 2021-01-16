import { createEntityAdapter, createReducer } from "@reduxjs/toolkit";
import { closeAllToasts, displayToast } from "./actions";

export const uiAdapter = createEntityAdapter({});

export const initialState = uiAdapter.getInitialState({
  toasts: [],
});

const uiReducer = createReducer(initialState, (builder) => {
  builder.addCase(closeAllToasts, (state) => {
    state.toasts = [];
  });
  builder.addCase(displayToast, (state, action) => {
    state.toasts = [...state.toasts, { ...action.payload }];
  });
});

export default uiReducer;
