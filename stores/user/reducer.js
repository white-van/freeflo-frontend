import { createEntityAdapter, createReducer } from "@reduxjs/toolkit";
import { login, signup } from "./actions";

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
});

export default userReducer;
