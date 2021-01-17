import { createAsyncThunk } from "@reduxjs/toolkit";
import { displayErrorToast } from "../ui/actions";
import { formatName } from "../helpers";
import { getRequest } from "../../requests";

export const projectReducerName = "project";

export const fetchProjects = createAsyncThunk(
  formatName(projectReducerName, "project"),
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await getRequest("/projects/")
      return response.data;
    } catch (e) {
      dispatch(displayErrorToast("Error has occured", "Fetching projects unsuccessful."));
      return rejectWithValue({
        status: e.response && e.response.status,
        message: e.response && e.response.data,
      });
    }
  }
);
/*
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
*/