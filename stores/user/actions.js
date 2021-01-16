import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { displaySuccessToast, displayErrorToast } from "../ui/actions";
import { formatName } from "../helpers";

export const userReducerName = "user";

export const login = createAsyncThunk(
  formatName(userReducerName, "login"),
  async ({ username, password }, { dispatch, rejectWithValue }) => {
    const requestBody = {
      username,
      password,
    };
    try {
      const response = await fetch(
        "http://localhost:9000/users/login",
        requestBody
      );
      dispatch(displaySuccessToast("Login successful", "Happy writing!"));
      return response.data;
    } catch (e) {
      dispatch(displayErrorToast("Error has occured", "Login unsuccessful."));
      return rejectWithValue({
        status: e.response && e.response.status,
        message: e.response && e.response.data,
      });
    }
  }
);

export const signup = createAsyncThunk(
  formatName(userReducerName, "signup"),
  async (
    { username, full_name, email, password },
    { dispatch, rejectWithValue }
  ) => {
    const requestBody = {
      username,
      full_name,
      email,
      password,
    };
    try {
      const response = await fetch(
        "http://localhost:9000/users/sign_up",
        requestBody
      );
      dispatch(displaySuccessToast("Sign up successful", "Happy writing!"));
      return response.data;
    } catch (e) {
      dispatch(displayErrorToast("Error has occured", "Sign up unsuccessful."));
      return rejectWithValue({
        status: e.response && e.response.status,
        message: e.response && e.response.data,
      });
    }
  }
);
