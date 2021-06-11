interface ISong {
  _id: string;
  name: string;
  artist: string;
  uploadDate: string;
  mediaUrl: string;
}

export interface IPlaylist {
  _id: string;
  name: string;
  creationDate: string;
  songs: ISong[];
}
