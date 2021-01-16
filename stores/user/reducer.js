import { createEntityAdapter, createReducer } from "@reduxjs/toolkit";
import { signup } from "./actions";

export const userAdapter = createEntityAdapter({});

export const initialState = userAdapter.getInitialState({
  userData: {
    isAuthenticated: false,
    accessToken: null,
    refreshToken: null,
  },
  signup: {
    error: null,
    isPending: false,
  },
});

const userReducer = createReducer(initialState, (builder) => {
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
  /*
  builder.addCase(displayToast, (state, action) => {
    state.toasts = [...state.toasts, { ...action.payload }];
  });*/
});

export default userReducer;
