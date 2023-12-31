import { Box } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
  img {
    // width: 180px;
    height: 180px;
    object-fit: contain;
  }
  #parent .hidden-child {
    visibility: hidden;
  }

  #parent:hover .hidden-child {
    visibility: visible;
  }
  #parent:hover {
    opacity: 0.5;
  }
  .playButton {
    &:hover {
      transform: scale(1.3);
    }
  }
  .pauseButton {
    visibility: visible;
  }
`;

export const PlayPauseWrapper = styled(Box)`
  display: flex;
  align-items: center;
`;

export const MusicCardWrapper = styled.div`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  min-width: 70%;
`;
