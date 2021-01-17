import Cookies from "js-cookie";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { displaySuccessToast, displayErrorToast } from "../ui/actions";
import { formatName } from "../helpers";
import { postRequest, deleteRequest, refreshConfig } from "../../network";

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
      Cookies.set("Access-Token", response.headers["Access-Token"]);
      Cookies.set("Refresh-Token", response.headers["Refresh-Token"]);
      Cookies.set("Expire-At", response.headers["Expire-At"]);
      refreshConfig();
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
      Cookies.set("Access-Token", response.headers["Access-Token"]);
      Cookies.set("Refresh-Token", response.headers["Refresh-Token"]);
      Cookies.set("Expire-At", response.headers["Expire-At"]);
      refreshConfig();
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
      const response = await deleteRequest("/users/sign_out", requestBody);
      Cookies.remove("Access-Token");
      Cookies.remove("Refresh-Token");
      Cookies.remove("Expire-At");
      refreshConfig();
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
