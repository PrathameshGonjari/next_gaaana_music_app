import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { Typography } from "@mui/material";
import { memo } from "react";
import Flex from "../Flex";
import PlayPauseButton from "./PlayPauseButton";
import PlaceHolderImage from "@/assets/images/imageplaceholder.png";
import { MusicCardWrapper, Wrapper } from "./style";
interface MusicCardProps {
  image: string;
  AlbumTitle: string;
  AlbumSubTitle: string;
  music: MusicType;
}

const MusicCard = (props: MusicCardProps) => {
  const { image, AlbumTitle, AlbumSubTitle, music } = props;

  return (
    <Wrapper>
      <Card>
        <Flex>
          <MusicCardWrapper>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                sx={{
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                }}
              >
                {AlbumTitle}
              </Typography>
              <Typography
                sx={{
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                }}
              >
                {AlbumSubTitle}
              </Typography>
            </CardContent>
            <PlayPauseButton music={music} />
          </MusicCardWrapper>
          <CardMedia
            component="img"
            sx={{ width: "25%" }}
            image={image ?? PlaceHolderImage}
            alt="Album Cover"
          />
        </Flex>
      </Card>
    </Wrapper>
  );
};

export default memo(MusicCard);
