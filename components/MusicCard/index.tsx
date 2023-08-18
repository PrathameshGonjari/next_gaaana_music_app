import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";

import { playPause, updateActiveMusic } from "@/redux/features/music-slice";
import { Typography } from "@mui/material";
import { memo } from "react";
import { useDispatch } from "react-redux";
import Flex from "../Flex";
import { MusicCardWrapper, Wrapper } from "./style";
interface MusicCardProps {
  image: string;
  AlbumTitle: string;
  AlbumSubTitle: string;
  music: MusicType;
}

const MusicCard = (props: MusicCardProps) => {
  const { image, AlbumTitle, AlbumSubTitle, music } = props;

  const dispatch = useDispatch();

  const onPlayButtonClick = (music: MusicType) => {
    dispatch(updateActiveMusic(music));
    dispatch(playPause(true));
  };

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
            <Box sx={{ pl: 1, pb: 1 }}>
              <Flex alignitems="center">
                <IconButton
                  className="hidden-child"
                  onClick={() => {
                    onPlayButtonClick(music);
                  }}
                  aria-label="play/pause"
                >
                  <PlayArrowIcon
                    className="playButton"
                    sx={{ height: 38, width: 38, color: "black" }}
                  />
                </IconButton>
              </Flex>
            </Box>
          </MusicCardWrapper>
          <CardMedia
            component="img"
            sx={{ width: "25%" }}
            image={image}
            alt="Album Cover"
          />
        </Flex>
      </Card>
    </Wrapper>
  );
};

export default memo(MusicCard);
