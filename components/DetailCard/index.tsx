import Flex from "@/components/Flex";
import { Card, CardMedia, Typography } from "@mui/material";
import { MainWrapper, TitleWrapper } from "./style";

declare interface DetailCardType {
  trackName: string;
  artistName: string;
  country: string;
  collectionName: string;
  shortDescription: string;
  longDescription: string;
  artworkUrl100: string;
}

const DetailCard = ({
  trackName,
  artistName,
  country,
  collectionName,
  shortDescription,
  longDescription,
  artworkUrl100
}: DetailCardType) => {
  return (
    <Card style={{ marginTop: 100 }}>
      <MainWrapper>
        <Flex>
          <TitleWrapper>
            <Typography variant="h2">{trackName}</Typography>
            <Typography variant="h4">{artistName}</Typography>
            <Typography variant="h5">{country}</Typography>
          </TitleWrapper>
          <CardMedia
            component="img"
            image={artworkUrl100}
            alt="song cover image"
          />
        </Flex>
        <Typography variant="h4">{collectionName}</Typography>
        <Typography variant="h5">{shortDescription}</Typography>
        <Typography variant="h6">{longDescription}</Typography>
      </MainWrapper>
    </Card>
  );
};

export default DetailCard;
