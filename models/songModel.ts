/* eslint-disable no-useless-catch */
import { Model, Schema, model, models } from "mongoose";

interface Songs extends Document {
  artistName: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionArtistId: number;
  collectionArtistViewUrl: string;
  collectionCensoredName: string;
  collectionExplicitness: string;
  collectionHdPrice: number;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  collectionViewUrl: string;
  contentAdvisoryRating: string;
  country: string;
  currency: string;
  discCount: number;
  discNumber: number;
  hasITunesExtras: boolean;
  kind: string;
  longDescription: string;
  previewUrl: string;
  primaryGenreName: string;
  releaseDate: string;
  shortDescription: string;
  trackCensoredName: string;
  trackCount: number;
  trackExplicitness: string;
  trackHdPrice: number;
  trackHdRentalPrice: number;
  trackId: number;
  trackName: string;
  trackNumber: number;
  trackPrice: number;
  trackRentalPrice: number;
  trackTimeMillis: number;
  trackViewUrl: string;
  wrapperType: string;
}

const songSchema = new Schema<Songs>({
  artistName: { type: String, trim: true },
  artworkUrl30: { type: String, trim: true },
  artworkUrl60: { type: String, trim: true },
  artworkUrl100: { type: String, trim: true },
  collectionArtistId: { type: Number },
  collectionArtistViewUrl: { type: String, trim: true },
  collectionCensoredName: { type: String, trim: true },
  collectionExplicitness: { type: String, trim: true },
  collectionHdPrice: { type: Number },
  collectionId: { type: Number },
  collectionName: { type: String, trim: true },
  collectionPrice: { type: Number },
  collectionViewUrl: { type: String, trim: true },
  contentAdvisoryRating: { type: String, trim: true },
  country: { type: String, trim: true },
  currency: { type: String, trim: true },
  discCount: { type: Number },
  discNumber: { type: Number },
  hasITunesExtras: { type: Boolean },
  kind: { type: String, trim: true },
  longDescription: { type: String, trim: true },
  previewUrl: { type: String, trim: true },
  primaryGenreName: { type: String, trim: true },
  releaseDate: { type: String, trim: true },
  shortDescription: { type: String, trim: true },
  trackCensoredName: { type: String, trim: true },
  trackCount: { type: Number },
  trackExplicitness: { type: String, trim: true },
  trackHdPrice: { type: Number },
  trackHdRentalPrice: { type: Number },
  trackId: { type: Number },
  trackName: { type: String, trim: true },
  trackNumber: { type: Number },
  trackPrice: { type: Number },
  trackRentalPrice: { type: Number },
  trackTimeMillis: { type: Number },
  trackViewUrl: { type: String, trim: true },
  wrapperType: { type: String, trim: true },
});

const SongModal = models.Song || model("Song", songSchema);

export default SongModal as Model<Songs>;
