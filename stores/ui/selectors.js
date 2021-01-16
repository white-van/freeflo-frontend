import { createSelector } from "reselect";

import { uiReducerName } from "./actions";

const uiStoreSelector = (state) => state[uiReducerName];

export const toastsSelector = createSelector(
  uiStoreSelector,
  (uiStore) => uiStore.toasts
);
