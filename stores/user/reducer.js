import { createEntityAdapter, createReducer } from "@reduxjs/toolkit";
import { login, signup, logout, fetchUsers, fetchUserById } from "./actions";

export const userAdapter = createEntityAdapter({});

export const initialState = userAdapter.getInitialState({
  userData: {
    isAuthenticated: false,
    accessToken: null,
    refreshToken: null,
  },
  login: {
    error: null,
    isPending: false,
  },
  signup: {
    error: null,
    isPending: false,
  },
  logout: {
    error: null,
    isPending: false,
  },
});

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(login.pending, (state) => {
    state.login.error = null;
    state.login.isPending = true;
  });
  builder.addCase(login.fulfilled, (state, { payload }) => {
    state.login.error = null;
    state.userData.isAuthenticated = true;
    state.userData.accessToken = payload.accessToken;
    state.userData.refreshToken = payload.refreshToken;
    state.login.isPending = false;
  });
  builder.addCase(login.rejected, (state, { payload }) => {
    state.login.error = payload;
    state.login.isPending = false;
  });
  builder.addCase(signup.pending, (state) => {
    state.signup.error = null;
    state.signup.isPending = true;
  });
  builder.addCase(signup.fulfilled, (state, { payload }) => {
    state.signup.error = null;
    state.userData.isAuthenticated = true;
    state.userData.accessToken = payload.accessToken;
    state.userData.refreshToken = payload.refreshToken;
    state.signup.isPending = false;
  });
  builder.addCase(signup.rejected, (state, { payload }) => {
    state.signup.error = payload;
    state.signup.isPending = false;
  });
  builder.addCase(logout.pending, (state) => {
    state.logout.error = null;
    state.logout.isPending = true;
  });
  builder.addCase(logout.fulfilled, (state, { payload }) => {
    state.logout.error = null;
    state.userData.isAuthenticated = false;
    state.userData.accessToken = null;
    state.userData.refreshToken = null;
    state.logout.isPending = false;
  });
  builder.addCase(logout.rejected, (state, { payload }) => {
    state.logout.error = payload;
    state.logout.isPending = false;
  });
  builder.addCase(fetchUsers.pending, (state) => {
    state.error = null;
    state.isFetching = true;
  });
  builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
    state.error = null;
    userAdapter.upsertMany(state, payload);
    state.isFetching = false;
  });
  builder.addCase(fetchUsers.rejected, (state, { payload }) => {
    state.error = payload;
    state.isFetching = false;
  });
  builder.addCase(fetchUserById.pending, (state) => {
    state.error = null;
    state.isFetching = true;
  });
  builder.addCase(fetchUserById.fulfilled, (state, { payload }) => {
    state.error = null;
    userAdapter.upsertOne(state, payload);
    state.isFetching = false;
  });
  builder.addCase(fetchUserById.rejected, (state, { payload }) => {
    state.error = payload;
    state.isFetching = false;
  });
});

export default userReducer;
