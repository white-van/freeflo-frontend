import { createSelector } from "reselect";

import { pullRequestReducerName } from "./actions";
import { pullRequestAdapter } from "./reducer";

const pullRequestStoreSelector = (state) => state[pullRequestReducerName];

export const pullRequestsSelector = pullRequestAdapter.getSelectors(
  pullRequestStoreSelector
);

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
