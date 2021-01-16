import { createSelector } from "reselect";

import { userReducerName } from "./actions";

const userStoreSelector = (state) => state[userReducerName];

export const userDataSelector = createSelector(
  userStoreSelector,
  (userStore) => userStore.userData
);

export const signupSelector = createSelector(
  userStoreSelector,
  (userStore) => userStore.signup
);

export const isPendingSelector = createSelector(
  signupSelector,
  (signup) => signup.isPending
);
