import { createAction } from "@reduxjs/toolkit";

import { formatName } from "../helpers";

export const uiReducerName = "ui";

export const displayToast = createAction(
  formatName(uiReducerName, "displayToast")
);

const displayToastWrapper = (title, description, variant) => {
  return displayToast({
    key: Math.random(),
    title,
    description,
    status: variant,
    dismissed: false,
  });
};

export const displaySuccessToast = (title, description) => {
  return displayToastWrapper(title, description, "success");
};
