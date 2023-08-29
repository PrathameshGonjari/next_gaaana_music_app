/**
 * @swagger
 * /postSongs:
 *   post:
 *     summary: Add Songs Data
 *     description: Fetches songs data from iTunes API and adds them to the database.
 *     tags:
 *       - Songs
 *     responses:
 *       '200':
 *         description: Successful response after adding songs to the database.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 *       '400':
 *         description: Bad request, invalid parameters provided.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Invalid parameters provided.
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: An error occurred while processing the request.
 */

import startDb from "@/lib/db";
import SongModal from "@/models/songModel";
import axios from "axios";
import { Document } from "mongodb";
import { NextResponse } from "next/server";

type Message = string;

type NewResponse = NextResponse<{ message?: Message; error?: string }>;

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

const refineSongsData = (data: Songs[]): Songs[] => {
  if (!data?.length) return [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const songsList = data.reduce<any[]>((accumulator, song) => {
    if (song?.previewUrl) {
      const refinedSong = {
        artistName: song?.artistName ?? "",
        artworkUrl30: song?.artworkUrl30 ?? "",
        artworkUrl60: song?.artworkUrl60 ?? "",
        artworkUrl100: song?.artworkUrl100 ?? "",
        collectionArtistId: song?.collectionArtistId ?? 0,
        collectionArtistViewUrl: song?.collectionArtistViewUrl ?? "",
        collectionCensoredName: song?.collectionCensoredName ?? "",
        collectionExplicitness: song?.collectionExplicitness ?? "",
        collectionHdPrice: song?.collectionHdPrice ?? 0,
        collectionId: song?.collectionId ?? 0,
        collectionName: song?.collectionName ?? "",
        collectionPrice: song?.collectionPrice ?? 0,
        collectionViewUrl: song?.collectionViewUrl ?? "",
        contentAdvisoryRating: song?.contentAdvisoryRating ?? "",
        country: song?.country ?? "",
        currency: song?.currency ?? "",
        discCount: song?.discCount ?? 0,
        discNumber: song?.discNumber ?? 0,
        hasITunesExtras: song?.hasITunesExtras ?? 0,
        kind: song?.artistName ?? "",
        longDescription: song?.longDescription ?? "",
        previewUrl: song?.previewUrl ?? "",
        primaryGenreName: song?.primaryGenreName ?? "",
        releaseDate: song?.releaseDate ?? "",
        shortDescription: song?.shortDescription ?? "",
        trackCensoredName: song?.trackCensoredName ?? "",
        trackCount: song?.trackCount ?? 0,
        trackExplicitness: song?.trackExplicitness ?? "",
        trackHdPrice: song?.trackHdPrice ?? 0,
        trackHdRentalPrice: song?.trackHdRentalPrice ?? 0,
        trackId: song?.trackId ?? 0,
        trackName: song?.trackName ?? "",
        trackNumber: song?.trackNumber ?? 0,
        trackPrice: song?.trackPrice ?? 0,
        trackRentalPrice: song?.trackRentalPrice ?? 0,
        trackTimeMillis: song?.trackTimeMillis ?? 0,
        trackViewUrl: song?.trackViewUrl ?? "",
        wrapperType: song?.wrapperType ?? "",
      };

      accumulator.push(refinedSong);
    }
    return accumulator;
  }, []);
  return songsList;
};

export const POST = async (req: Request): Promise<NewResponse> => {
  if (req.method !== "POST") {
    return NextResponse.json(
      { error: "Only Post Request are allowed" },
      { status: 422 }
    );
  }
  try {
    const url = `https://itunes.apple.com/search/?limit=${500}`;

    await startDb();

    const res = await axios(url);
    const songs = refineSongsData(res?.data?.results);

    await SongModal.create(songs);

    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
};
