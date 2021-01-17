import { createAsyncThunk } from "@reduxjs/toolkit";
import { displayErrorToast } from "../ui/actions";
import { formatName } from "../helpers";
import { getRequest } from "../../requests";

export const pullRequestReducerName = "pullRequest";

export const fetchPullRequestsByProject = createAsyncThunk(
  formatName(pullRequestReducerName, "fetchPullRequestsByProject"),
  async ({ project_id }, { dispatch, rejectWithValue }) => {
    try {
      const response = await getRequest(`/projects/${project_id}/commits`);
      return response.data;
    } catch (e) {
      dispatch(
        displayErrorToast(
          "Error has occured",
          "Fetching pull requests was unsuccessful."
        )
      );
      return rejectWithValue({
        status: e.response && e.response.status,
        message: e.response && e.response.data,
      });
    }
  }
);
