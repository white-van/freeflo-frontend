import { createAsyncThunk } from "@reduxjs/toolkit";
import { displaySuccessToast, displayErrorToast } from "../ui/actions";
import { formatName } from "../helpers";
import { postRequest, deleteRequest } from "../../requests";

export const userReducerName = "user";

// ---------------------------- user auth ----------------------------------------------

// todo: get headers, set cookie
// change payload to status, message

export const login = createAsyncThunk(
  formatName(userReducerName, "login"),
  async ({ email, password }, { dispatch, rejectWithValue }) => {
    const requestBody = {
      email,
      password,
    };
    try {
      const response = await postRequest("/users/login", requestBody);
      dispatch(displaySuccessToast("Login successful", "Happy writing!"));
      //response.headers
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
      const response = await postRequest("/users/sign_up", requestBody);
      //response.headers
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

export const logout = createAsyncThunk(
  formatName(userReducerName, "logout"),
  async (arg, { dispatch, rejectWithValue }) => {
    const requestBody = arg; // TODO: fix once i figure out what the params are
    try {
      // pass in access token
      const response = await deleteRequest("/users/sign_out", requestBody);
      dispatch(displaySuccessToast("Sign out successful", "Have a good day!"));
      return response.data;
    } catch (e) {
      dispatch(
        displayErrorToast("Error has occured", "Sign out unsuccessful.")
      );
      return rejectWithValue({
        status: e.response && e.response.status,
        message: e.response && e.response.data,
      });
    }
  }
);

// -------------------------- user data --------------------------------------

export const fetchUsers = createAsyncThunk(
  formatName(userReducerName, "fetchUsers"),
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await getRequest("/users/");
      return response.data;
    } catch (e) {
      dispatch(
        displayErrorToast("Error has occured", "Fetching users unsuccessful.")
      );
      return rejectWithValue({
        status: e.response && e.response.status,
        message: e.response && e.response.data,
      });
    }
  }
);

export const fetchUserById = createAsyncThunk(
  formatName(userReducerName, "fetchUserById"),
  async ({ userId }, { dispatch, rejectWithValue }) => {
    try {
      const response = await getRequest("/users/", `?user-id=${userId}`);
      return response.data;
    } catch (e) {
      dispatch(
        displayErrorToast("Error has occured", "Fetching user unsuccessful.")
      );
      return rejectWithValue({
        status: e.response && e.response.status,
        message: e.response && e.response.data,
      });
    }
  }
);
