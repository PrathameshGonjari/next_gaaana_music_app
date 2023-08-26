import LoadingMusicCard from "@/components/LoadingMusicCard";
import { Grid } from "@mui/material";
interface LoadingMusicListType {
  isLoading: boolean;
}

const LoadingMusicList = ({ isLoading }: LoadingMusicListType) => {
  const skeletonArray = Array(9)?.fill("");

  return (
    <Grid
      container
      sx={{ display: isLoading ? "flex" : "none" }}
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 1, sm: 8, md: 12 }}
    >
      {skeletonArray?.map((_: unknown, index: number) => {
        const key = `key_${index}`;
        return (
          <Grid item xs={2} sm={4} md={4} key={key}>
            <LoadingMusicCard />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default LoadingMusicList;
