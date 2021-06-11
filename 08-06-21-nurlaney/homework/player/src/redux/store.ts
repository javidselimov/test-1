import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { playlistsReducer } from "../modules/Playlists/reducers/playlistsReducer";

const middlewares = [thunk];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export const reducers = combineReducers({
  playlists: playlistsReducer,
});

export const store = createStore(reducers, enhancer);

export type RootState = ReturnType<typeof store.getState>;
