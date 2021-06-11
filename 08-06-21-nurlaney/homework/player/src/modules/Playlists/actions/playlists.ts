import { Dispatch } from "redux";
import { playlistService } from "../service";
import { ActionTypes } from "./actionTypes";

export function getPlaylists(dispatch: Dispatch) {
  dispatch({ type: ActionTypes.LOAD_PLAYLISTS });
  playlistService
    .getPlaylists()
    .then(({ data }) => {
      dispatch({
        type: ActionTypes.LOAD_PLAYLISTS_SUCCESS,
        payload: data,
      });
    })
    .catch((err: Error) => {
      dispatch({
        type: ActionTypes.LOAD_PLAYLISTS_ERROR,
        error: err,
      });
    });
}
