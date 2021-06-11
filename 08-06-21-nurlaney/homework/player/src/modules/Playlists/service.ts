import { AxiosResponse } from "axios";
import { HttpClient } from "../HttpClient/index";
import { IPlaylist } from "../models";

class PlaylistService extends HttpClient {
  constructor() {
    super("http://localhost:8000");
  }

  getPlaylists(): Promise<AxiosResponse<IPlaylist>> {
    return this.get("api/playlists");
  }
}

export const playlistService = new PlaylistService();
