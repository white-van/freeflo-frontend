import { createSelector } from "reselect";

import { projectReducerName } from "./actions";
import { projectAdapter } from "./reducer";

const projectStoreSelector = (state) => state[projectReducerName];

export const projectsSelector = projectAdapter.getSelectors(
  projectStoreSelector
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
