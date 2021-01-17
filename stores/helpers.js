import { validateYupSchema } from "formik";

export const formatName = (reducer, name) => `${reducer}/${name}`;

export function wait(s) {
  return new Promise((resolve) => setTimeout(resolve, s));
}
