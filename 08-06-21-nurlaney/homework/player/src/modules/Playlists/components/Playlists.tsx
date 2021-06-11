import React, { FC } from "react";
import { IPlaylist } from "../../models";
import "./playlists.scss";

interface IProps {
  playlist: IPlaylist;
}

export const Playlist: FC<IProps> = ({ playlist }) => {
  return (
    <>
      <div className="list-card">
        <h4>{playlist.name}</h4>
        <p>1{playlist.creationDate}</p>
      </div>
    </>
  );
};
