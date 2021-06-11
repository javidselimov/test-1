export interface ISong {
  _id: string;
  name: string;
  artist: string;
  uploadDate: string;
  mediaUrl: string;
}

export interface IPlaylist {
  name: string;
  creationDate: string;
  author: string;
  songs: [ISong];
}
