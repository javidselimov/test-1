import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "../../redux/store";
import { IPlaylist } from "../models";

const initialValue = {
  _id: "",
  name: "",
  creationDate: "",
  songs: [],
};

export const SinglePlaylist = () => {
  const { id } = useParams<{ id: string }>();
  const playlists = useSelector((state: RootState) => state.playlists);
  const [currPlaylist, setCurrPlaylist] = useState<IPlaylist>(initialValue);

  const findPlaylistById = (id: string) => {
    const b = playlists.data.find((playlist) => playlist._id === id);
    setCurrPlaylist(b ? b : initialValue);
  };

  useEffect(() => {
    findPlaylistById(id);
  }, [findPlaylistById, id]);

  return (
    <>
      <ul>
        {currPlaylist.songs.map((song) => (
          <li key={song._id}>{song._id}</li>
        ))}
      </ul>
    </>
  );
};
