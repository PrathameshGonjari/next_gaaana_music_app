import { playPause, updateActiveMusic } from "@/redux/features/music-slice";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { PlayPauseWrapper } from "./style";

const PlayPauseButton = ({ music }: { music: MusicType }) => {
  const dispatch = useDispatch();

  const onPlayButtonClick = (music: MusicType) => {
    dispatch(updateActiveMusic(music));
    dispatch(playPause(true));
  };

  return (
    <PlayPauseWrapper sx={{ pl: 1, pb: 1 }}>
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
    </PlayPauseWrapper>
  );
};

export default PlayPauseButton;
