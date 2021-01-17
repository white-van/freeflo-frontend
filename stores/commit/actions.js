import { createAsyncThunk } from "@reduxjs/toolkit";
import { displayErrorToast } from "../ui/actions";
import { formatName } from "../helpers";
import { getRequest } from "../../requests";

export const commitReducerName = "commit";

export const fetchCommitsByProject = createAsyncThunk(
  formatName(commitReducerName, "fetchCommitsByProject"),
  async ({ branch_id, name }, { dispatch, rejectWithValue }) => {
    try {
      const response = await getRequest(
        `/projects/${branch_id}/commits`,
        `?name=${name}`
      );
      return response.data;
    } catch (e) {
      dispatch(
        displayErrorToast(
          "Error has occured",
          "Fetching commits was unsuccessful."
        )
      );
      return rejectWithValue({
        status: e.response && e.response.status,
        message: e.response && e.response.data,
      });
    }
  }
);
