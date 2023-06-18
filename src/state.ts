import { legacy_createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";

import { MediaState } from "./media/state/mediaTypes";
import { initialMediaState } from "./media/state/mediaReducer";
import { mediaReducer } from "./media/state/mediaReducer";

const reducer = combineReducers({
  mediaState: mediaReducer,
});

export default function configureStore(preloadedState: any) {
  const middlewares = [ReduxThunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancer = composeWithDevTools(middlewareEnhancer);
  const store = legacy_createStore(reducer, preloadedState, enhancer);
  return store;
}

export interface AppState {
  mediaState: MediaState;
}

export const initialAppState: AppState = {
  mediaState: initialMediaState,
};

export const store = configureStore(initialAppState);
