import { createSelector } from "reselect";

import { userReducerName } from "./actions";
import { userAdapter } from "./reducer";

const userStoreSelector = (state) => state[userReducerName];

export const usersSelector = userAdapter.getSelectors(userStoreSelector);

export const userDataSelector = createSelector(
  userStoreSelector,
  (userStore) => userStore.userData
);

export const isAuthenticatedSelector = createSelector(
  userDataSelector,
  (userData) => userData.isAuthenticated
);

export const signupSelector = createSelector(
  userStoreSelector,
  (userStore) => userStore.signup
);

export const isSignupPendingSelector = createSelector(
  signupSelector,
  (signup) => signup.isPending
);

export const loginSelector = createSelector(
  userStoreSelector,
  (userStore) => userStore.login
);

export const isLoginPendingSelector = createSelector(
  loginSelector,
  (login) => login.isPending
);
