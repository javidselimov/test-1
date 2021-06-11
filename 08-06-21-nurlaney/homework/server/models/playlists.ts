import mongoose from "mongoose";

const { Schema } = mongoose;

const songSchema = new Schema({
  name: {
    type: String,
  },
  artist: {
    type: String,
  },
  uploadDate: {
    type: Date,
  },
  mediaUrl: {
    type: String,
  },
  playlistId: {
    type: Number,
  },
});

const playlistsSchema = new Schema({
  name: {
    type: String,
  },
  creationDate: {
    type: Date,
  },
  author: {
    type: String,
  },
  songs: [songSchema],
});

export default mongoose.model("Playlists", playlistsSchema);
