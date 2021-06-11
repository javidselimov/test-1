import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AsyncStatus } from "../../redux/AsyncStatus";
import { RootState } from "../../redux/store";
import { Playlist } from "./components/Playlists";

export const Playlists: FC = () => {
  const history = useHistory();
  const playlists = useSelector((state: RootState) => state.playlists);

  const gotToPlaylist = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    history.push(`/playlist/${e.currentTarget.dataset.id}`);
  };

  return (
    <div>
      <div className="row">
        {playlists.status === AsyncStatus.SUCCESS ? (
          playlists.data.map((playlist) => (
            <div
              key={playlist._id}
              data-id={playlist._id}
              onClick={gotToPlaylist}
              className="col-md-4"
            >
              <Playlist playlist={playlist} />
            </div>
          ))
        ) : (
          <p>...loading</p>
        )}
      </div>
    </div>
  );
};
