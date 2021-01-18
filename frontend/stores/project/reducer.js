import { createEntityAdapter, createReducer } from "@reduxjs/toolkit";
import { fetchProjects } from "./actions";

export const projectAdapter = createEntityAdapter({});

export const initialState = projectAdapter.getInitialState({
  error: null,
  isFetching: false,
});

const projectReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchProjects.pending, (state) => {
    state.error = null;
    state.isFetching = true;
  });
  builder.addCase(fetchProjects.fulfilled, (state, { payload }) => {
    state.error = null;
    projectAdapter.upsertMany(state, payload);
    state.isFetching = false;
  });
  builder.addCase(fetchProjects.rejected, (state, { payload }) => {
    state.error = payload;
    state.isFetching = false;
  });
});

export default projectReducer;
