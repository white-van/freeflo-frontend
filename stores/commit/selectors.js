import { createSelector } from "reselect";

import { commitReducerName } from "./actions";
import { commitAdapter } from "./reducer";

const commitStoreSelector = (state) => state[commitReducerName];

export const commitsSelector = commitAdapter.getSelectors(commitStoreSelector);

/*
export const userDataSelector = createSelector(
  userStoreSelector,
  (userStore) => userStore.userData
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
);*/
