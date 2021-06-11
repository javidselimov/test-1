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

export default mongoose.model("Song", songSchema);
