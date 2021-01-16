import { createAction } from "@reduxjs/toolkit";

export const uiReducerName = "ui";

const formatName = (name) => `${uiReducerName}/${name}`;

export const displaySnack = createAction(formatName("displaySnack"));
