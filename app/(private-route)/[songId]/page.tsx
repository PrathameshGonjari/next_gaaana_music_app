import getMusic from "@/lib/getMusic";
import React from "react";

const filter = {
  term: "",
  songid: "",
  offset: 0,
  limit: 12,
};

async function getSong(filters: FilterType) {
  const data = await getMusic(filters);
  return data?.isSuccess ? data.data : [];
}

export async function generateStaticParams() {
  const data = await getSong(filter);
  return data.map((song: MusicType) => ({
    params: { songId: String(song?._id) },
  }));
}

async function SongsComponent({ params }:any) {
  const fetchData = async () => {
    const data = await getSong({
      ...filter,
      songid: params?.songId,
    });
    return data;
  };

  const data = await fetchData() as MusicType[];

  return (
    <div style={{ marginTop: 200 }}>
      {data?.length > 0 ? data[0].artistName : "Loading..."}
    </div>
  );
}

export default SongsComponent;
