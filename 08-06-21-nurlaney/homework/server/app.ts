import { Playlists, Song } from "./models";

const express = require("express");
const port = 8000;
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const router = express.Router();

app.use("/", router);

mongoose.connect(
  "mongodb+srv://nurlaney:test@cluster0.aiwcj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", (err: any) => console.log(err));
db.once("open", () => console.log("connected"));

mongoose.set("useFindAndModify", false);

//playlist
router.get("/api/playlists", async (req: any, res: any) => {
  try {
    const playlists = await Playlists.find();
    res.status(200).json(playlists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/api/playlists", (req: any, res: any) => {
  const name = req.body.name;
  const creationDate = Date.now().toString();
  const songs: any = [];
  const newPlaylist = new Playlists({
    name,
    creationDate,
    songs,
  });
  newPlaylist
    .save()
    .then(() => res.json("New playlist created!"))
    .catch((err: any) => res.status(500).json("Error: " + err));
});

router.get("/api/playlists/:id", (req: any, res: any) => {
  Playlists.findOne({ _id: req.params.id })
    .populate("songs")
    .then(function (playlist: any) {
      res.json(playlist);
    })
    .catch(function (err: any) {
      res.json(err);
    });
});

router.delete("/api/playlists/:id", (req: any, res: any) => {
  Playlists.findByIdAndDelete(req.params.id)
    .then(() => res.json("deleted"))
    .catch((err: any) => res.status(400).json("Error: " + err));
});

router.patch("/api/playlists/:id", (req: any, res: any) => {
  Playlists.findByIdAndUpdate(req.params.id, req.body)
    .then((playlist: any) => {
      if (!playlist) {
        return res.status(404).send();
      }
      res.send("updated");
    })
    .catch((error: any) => {
      res.status(500).send(error);
    });
});
//end playlist

//songs

router.get("/songs", async (req: any, res: any) => {
  try {
    const songs = await Song.find();
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/songs", (req: any, res: any) => {
  const name = req.body.name;
  const uploadDate = Date.now().toString();
  const artist = req.body.artist;
  const mediaUrl = req.body.mediaUrl;
  const newSong = new Song({
    name,
    uploadDate,
    artist,
    mediaUrl,
  });
  newSong
    .save()
    .then(() => res.json("New song created!"))
    .catch((err: any) => res.status(500).json("Error: " + err));
});

router.get("/songs/:id", (req: any, res: any) => {
  Song.findById(req.params.id)
    .then((song: any) => res.json(song))
    .catch((err: any) => res.status(400).json("Error: " + err));
});

router.delete("/songs/:id", (req: any, res: any) => {
  Song.findByIdAndDelete(req.params.id)
    .then(() => res.json("deleted"))
    .catch((err: any) => res.status(400).json("Error: " + err));
});

router.patch("/songs/:id", (req: any, res: any) => {
  Song.findByIdAndUpdate(req.params.id, req.body)
    .then((song: any) => {
      if (!song) {
        return res.status(404).send();
      }
      res.send("updated");
    })
    .catch((error: any) => {
      res.status(500).send(error);
    });
});

//songs end

router.post("/api/playlists/add/:id", (req: any, res: any) => {
  Song.findById(req.body._id).then((song: any) => {
    Playlists.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { songs: song._id } },
      { new: true }
    )
      .then(function (dbProduct: any) {
        res.json(dbProduct);
      })
      .catch(function (err: any) {
        res.json(err);
      });
  });
});

router.put("/api/playlists/remove/:id", (req: any, res: any) => {
  Song.findOne({ _id: req.body._id }).then((song: any) => {
    Playlists.updateOne(
      {
        _id: req.params.id,
      },
      {
        $pull: { songs: req.body },
      },
      { multi: true }
    )
      .then(() => res.json("song removed from the playlist"))
      .catch((err: any) => res.status(500).json("Error: " + err));
  });
});

app.listen(port);
