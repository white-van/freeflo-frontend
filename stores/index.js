import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

import { projectReducerName } from "./project/actions";
import projectReducer from "./project/reducer";

import { uiReducerName } from "./ui/actions";
import uiReducer from "./ui/reducer";

import { userReducerName } from "./user/actions";
import userReducer from "./user/reducer";

const createRootReducer = () =>
  combineReducers({
    [projectReducerName]: projectReducer,
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
