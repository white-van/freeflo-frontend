import { createEntityAdapter, createReducer } from "@reduxjs/toolkit";
import { fetchPullRequestsByProject } from "./actions";

export const pullRequestAdapter = createEntityAdapter({});

export const initialState = pullRequestAdapter.getInitialState({
  error: null,
  isFetching: false,
});

const pullRequestReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchPullRequestsByProject.pending, (state) => {
    state.error = null;
    state.isFetching = true;
  });
  builder.addCase(
    fetchPullRequestsByProject.fulfilled,
    (state, { payload }) => {
      state.error = null;
      pullRequestAdapter.upsertMany(state, payload);
      state.isFetching = false;
    }
  );
  builder.addCase(fetchPullRequestsByProject.rejected, (state, { payload }) => {
    state.error = payload;
    state.isFetching = false;
  });
});

export default pullRequestReducer;
