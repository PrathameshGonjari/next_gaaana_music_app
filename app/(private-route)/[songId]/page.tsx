import getMusic from "@/lib/getMusic";
import React from "react";

declare interface SongsTypes {
  params: { songId: string };
}

const getMusicById = async (songId: string) => {
  try {
    const postResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL as string}getSongs?songid=${songId}`,
      {
        method: "GET",
      }
    );
    const { data } = await postResponse.json();
    return data;
  } catch (err) {
    return { error: err || "Something Went Wrong" };
  }
};

export async function generateStaticParams() {
  const filter = {
    term: "",
    songid: "",
    offset: 0,
    limit: 12,
  };

  const musicList = await getMusic(filter);

  return musicList?.data?.map((song: MusicType) => ({
    songId: String(song?._id),
  }));
}

const Songs = async ({ params: { songId } }: SongsTypes) => {
  const data = (await getMusicById(songId)) as MusicType[];

  return <div style={{ marginTop: 200 }}>{data?.[0]?.artistName}</div>;
};

export default Songs;
