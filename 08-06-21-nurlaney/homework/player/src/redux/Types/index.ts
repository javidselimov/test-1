import { IPlaylist } from "../../modules/models";
import { ActionTypes } from "../../modules/Playlists/actions/actionTypes";

interface LoadPlaylist {
  type: ActionTypes.LOAD_PLAYLISTS;
  error: null;
  payload: [];
}
interface SuccsessPlaylist {
  type: ActionTypes.LOAD_PLAYLISTS_SUCCESS;
  payload: IPlaylist[];
  error: null;
}
interface ErrorPlaylist {
  type: ActionTypes.LOAD_PLAYLISTS_ERROR;
  payload: [];
  error: Error;
}

export type Action = LoadPlaylist | SuccsessPlaylist | ErrorPlaylist;
