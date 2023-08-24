import startDb from "@/lib/db";
import SongModal from "@/models/songModel";
import { NextResponse, NextRequest } from "next/server";

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

    await startDb();

    const searchRegex = new RegExp(term, "i");

    const songs = await SongModal.find({
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
      .skip(Number(offset));

    return NextResponse.json({ data: songs, message: "success", status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
};
