import startDb from "@/lib/db";
import SongModal from "@/models/songModel";
import { NextResponse, NextRequest } from "next/server";


/**
 * @swagger
 * /getSongs:
 *   get:
 *    summary: Get Songs Data
 *    description: Returns a list of songs from the database. Users can search and get more songs by providing search and offset query parameters.
 *    tags:
 *      - Songs
 *    parameters:
 *      - name: term
 *        in: query
 *        description: The search query to filter songs by artist name, track name, and description.
 *        required: false
 *        type: string
 *      - name: offset
 *        in: query
 *        description: The offset query for getting new songs from the database.
 *        required: false
 *        type: string
 *      - name: limit
 *        in: query
 *        description: The limit query for getting a limited number of songs from the database.
 *        required: false
 *        type: string
 *      - name: songid
 *        in: query
 *        description: The query parameter to retrieve a specific song by ID from the database.
 *        required: false
 *        type: string
 *    responses:
 *      200:
 *        description: Successful response with song data
 *        content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Song'
 *                 message:
 *                   type: string
 *                 status:
 *                   type: integer
 *                   example: 200
 *      400:
 *        description: Bad request, invalid parameters provided.
 *        content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Invalid parameters provided.
 *      500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: An error occurred while processing the request.
 *      
 */

type Message = string;

type NewResponse = NextResponse<{ message?: Message; error?: string }>;

export const GET = async (req: NextRequest): Promise<NewResponse> => {
  try {
    if (req.method !== "GET") {
      return NextResponse.json(
        { error: "Only Get Request are allowed" },
        { status: 422 }
      );
    }
    const urlParams = req.nextUrl.searchParams;

    const term = urlParams.get("term") as string;
    const offset = urlParams.get("offset");
    const limit = urlParams.get("limit");
    const songId = urlParams.get("songid") as string;
    
    await startDb();

    const searchRegex = new RegExp(term, "i");
    
    const getSong = async () => {
      if (!!songId && songId !== "undefined") {
        const findSongById = await SongModal.findById(songId)
          .then((song) => {
            return {
              data: song ? [song] : [],
              message: "success",
              status: 200,
            };
          })
          .catch(() => {
            return {
              data: null,
              message: "some thins went wrong",
              status: 500,
            };
          });
        return findSongById;
      }

      const song = await SongModal.find({
        $or: [
          { artistName: searchRegex },
          { artistName: { $regex: searchRegex } },
          { collectionName: searchRegex },
          { collectionName: { $regex: searchRegex } },
          { longDescription: searchRegex },
          { longDescription: { $regex: searchRegex } },
          { trackCensoredName: searchRegex },
          { trackCensoredName: { $regex: searchRegex } },
          { trackName: searchRegex },
          { trackName: { $regex: searchRegex } },
        ],
      })
        .limit(Number(limit))
        .skip(Number(offset))
        .then((song) => {
          return {
            data: song,
            message: "success",
            status: 200,
          };
        })
        .catch(() => {
          return {
            data: null,
            message: "some thins went wrong",
            status: 500,
          };
        });

      return song;
    };

    const songs = await getSong();

    return NextResponse.json(songs);
  } catch (error) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
};
