import { createAction } from "@reduxjs/toolkit";

import { formatName } from "../helpers";

export const uiReducerName = "ui";

export const closeAllToasts = createAction(
  formatName(uiReducerName, "closeAllToasts")
);

export const displayToast = createAction(
  formatName(uiReducerName, "displayToast")
);

const displayToastWrapper = (title, description, isSticky, variant) => {
  return displayToast({
    key: Math.random(),
    title,
    description,
    duration: isSticky ? null : 5000,
    status: variant,
  });
};

export const displaySuccessToast = (title, description, isSticky) => {
  return displayToastWrapper(title, description, isSticky, "success");
};
