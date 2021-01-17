import { createEntityAdapter, createReducer } from "@reduxjs/toolkit";
import {
  closeAllModals,
  closeAllToasts,
  displayToast,
  toggleModal,
} from "./actions";

export const uiAdapter = createEntityAdapter({});

export const initialState = uiAdapter.getInitialState({
  isShowing: {
    login: false,
    signup: false,
  },
  toasts: [],
});

const uiReducer = createReducer(initialState, (builder) => {
  builder.addCase(closeAllToasts, (state) => {
    state.toasts = [];
  });
  builder.addCase(displayToast, (state, action) => {
    state.toasts = [...state.toasts, { ...action.payload }];
  });
  builder.addCase(closeAllModals, (state) => {
    state.isShowing = initialState.isShowing;
  });
  builder.addCase(toggleModal, (state, action) => {
    state.isShowing[action.payload] = !state.isShowing[action.payload];
  });
});

export default uiReducer;
