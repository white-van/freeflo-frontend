import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

import { commitReducerName } from "./commit/actions";
import commitReducer from "./commit/reducer";

import { projectReducerName } from "./project/actions";
import projectReducer from "./project/reducer";

import { pullRequestReducerName } from "./pull_request/actions";
import pullRequestReducer from "./pull_request/reducer";

import { uiReducerName } from "./ui/actions";
import uiReducer from "./ui/reducer";

import { userReducerName } from "./user/actions";
import userReducer from "./user/reducer";

const createRootReducer = () =>
  combineReducers({
    [commitReducerName]: commitReducer,
    [projectReducerName]: projectReducer,
    [pullRequestReducerName]: pullRequestReducer,
    [uiReducerName]: uiReducer,
    [userReducerName]: userReducer,
  });

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(),
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}
