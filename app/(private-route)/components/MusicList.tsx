import MusicCard from "@/components/MusicCard";
import NoData from "@/components/NoData";
import { Box, Grid } from "@mui/material";
import { FC } from "react";

interface MusicListType {
  list: MusicType[];
  isLoading: boolean;
}

const MusicList: FC<MusicListType> = ({ list, isLoading }) => {
  if(!list?.length && !isLoading) return <NoData />;
  return (
    <Box
      sx={{
        my: 2,
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {list?.map((music: MusicType, index: number) => {
          const key = `key_${index}_${music?.trackId}`;
          return (
            <Grid item xs={2} sm={4} md={4} key={key}>
              <MusicCard
                music={music}
                image={music.artworkUrl100}
                AlbumTitle={music.trackName}
                AlbumSubTitle={music.artistName}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default MusicList;
