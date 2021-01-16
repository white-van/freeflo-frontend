import { createEntityAdapter, createReducer } from "@reduxjs/toolkit";
//import { closeAllToasts, displayToast } from "./actions";

export const userAdapter = createEntityAdapter({});

export const initialState = userAdapter.getInitialState({
  userData: null,
});

const userReducer = createReducer(initialState, (builder) => {
  /*
  builder.addCase(closeAllToasts, (state) => {
    state.toasts = [];
  });
  builder.addCase(displayToast, (state, action) => {
    state.toasts = [...state.toasts, { ...action.payload }];
  });*/
});

export default userReducer;
