import { AsyncStatus } from "../../../redux/AsyncStatus";
import { Action } from "../../../redux/Types";
import { IPlaylist } from "../../models";
import { ActionTypes } from "../actions/actionTypes";

export interface IStore {
  data: IPlaylist[];
  status: string;
  error: Error | null;
}

const initialValue: IStore = {
  data: [],
  status: AsyncStatus.IDLE,
  error: null,
};

export const playlistsReducer = (state = initialValue, action: Action) => {
  switch (action.type) {
    case ActionTypes.LOAD_PLAYLISTS:
      return {
        ...state,
        status: AsyncStatus.LOADING,
        data: action.payload,
        error: action.error,
      };
    case ActionTypes.LOAD_PLAYLISTS_SUCCESS:
      return {
        ...state,
        status: AsyncStatus.SUCCESS,
        data: action.payload,
        error: action.error,
      };
    case ActionTypes.LOAD_PLAYLISTS_ERROR:
      return {
        ...state,
        status: AsyncStatus.ERROR,
        error: action.error,
      };

    default:
      return state;
  }
};
