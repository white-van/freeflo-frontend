import { createEntityAdapter, createReducer } from "@reduxjs/toolkit";
import { uiReducerName, displaySnack } from "./actions";

export const uiAdapter = createEntityAdapter({});

export const initialState = uiAdapter.getInitialState({
  snacks: [],
});

const uiReducer = createReducer(initialState, (builder) => {
  builder.addCase(displaySnack, (state, action) => {
    state.snacks = action.payload;
  });
});

export default uiReducer;
