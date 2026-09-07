import mongoose, { Schema } from "mongoose";

interface ISpotify {
  song_name: string;
  song_artist?: string;
  song_url?: string;
}

const spotifySchema = new Schema<ISpotify>({
  song_name: { type: String, required: true },
  song_artist: { type: String, required: false },
  song_url: { type: String, required: false },
});

export const Spotify = mongoose.model<ISpotify>(
  "Spotify",
  spotifySchema,
  "spotify",
);
