import { createEntityAdapter, createReducer } from "@reduxjs/toolkit";
import { fetchCommitsByProject } from "./actions";

export const commitAdapter = createEntityAdapter({});

export const initialState = commitAdapter.getInitialState({
  error: null,
  isFetching: false,
});

const commitReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchCommitsByProject.pending, (state) => {
    state.error = null;
    state.isFetching = true;
  });
  builder.addCase(fetchCommitsByProject.fulfilled, (state, { payload }) => {
    state.error = null;
    commitAdapter.upsertMany(state, payload);
    state.isFetching = false;
  });
  builder.addCase(fetchCommitsByProject.rejected, (state, { payload }) => {
    state.error = payload;
    state.isFetching = false;
  });
});

export default commitReducer;
