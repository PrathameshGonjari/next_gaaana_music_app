import { playPause, updateActiveMusic } from "@/redux/features/music-slice";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { PlayPauseWrapper } from "./style";

const PlayPauseButton = ({ music }: { music: MusicType }) => {
  const { activeMusic, isPlayMusic } = useSelector(
    (state: AppReducerState) => state.musicappreducer
  );

  const dispatch = useDispatch();

  const onPlayButtonClick = (playMusic: MusicType, playingMusic: boolean) => {
    dispatch(updateActiveMusic(playMusic));
    dispatch(playPause(!playingMusic));
  };

  const isActivePlaying = music?._id === activeMusic?._id && !isPlayMusic;

  return (
    <PlayPauseWrapper
      sx={{ pl: 1, pb: 1, cursor: isActivePlaying ? "not-allowed" : "pointer" }}
    >
      <IconButton
        className="hidden-child"
        onClick={(e) => {
          onPlayButtonClick(music, isPlayMusic);
          e.stopPropagation();
        }}
        disabled={isActivePlaying}
        aria-label="play/pause"
      >
        {isActivePlaying ? (
          <PauseCircleIcon
            className="pauseButton"
            sx={{ height: 38, width: 38, color: "black" }}
          />
        ) : (
          <PlayArrowIcon
            className="playButton"
            sx={{ height: 38, width: 38, color: "black" }}
          />
        )}
      </IconButton>
    </PlayPauseWrapper>
  );
};

export default PlayPauseButton;
