import getMusic from "@/lib/getMusic";
import { Container } from "@mui/material";
import DetailCard from "../../../components/DetailCard";

declare interface SongComponetType {
  params: {
    songId: string;
  };
}

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

async function SongsComponent({ params }: SongComponetType) {
  const fetchData = async () => {
    const data = await getSong({
      ...filter,
      songid: params?.songId,
    });
    return data;
  };

  const data = (await fetchData()) as MusicType[];

  return (
    <Container>
      <DetailCard
        trackName={data?.[0]?.trackName}
        artistName={data?.[0]?.artistName}
        country={data?.[0]?.country}
        collectionName={data?.[0]?.collectionName}
        shortDescription={data?.[0]?.shortDescription}
        artworkUrl100={data?.[0]?.artworkUrl100}
        longDescription={data?.[0]?.longDescription}
      />
    </Container>
  );
}

export default SongsComponent;
