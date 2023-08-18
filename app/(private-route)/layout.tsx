"use client";
import MediaPlayer from "@/components/MediaPlayer";
import NavigationBar from "@/components/NavBar";
import { playPause } from "@/redux/features/music-slice";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
interface LoginPageLayoutType {
  children: ChildrenType;
}

const LoginPageLayout: FC<LoginPageLayoutType> = ({ children }) => {
  const { activeMusic, playMusic } = useSelector(
    (state: any) => state.musicappreducer
  );

  const dispatch = useDispatch();

  const handleStop = () => {
    dispatch(playPause(true));
  };
 
  const handlePlayPause = (playMusicState: boolean) => {
    dispatch(playPause(playMusicState));
  };

  return (
    <>
      <NavigationBar />
      {children}
      <MediaPlayer
        playMusic={playMusic}
        activeMusic={activeMusic}
        handleStop={handleStop}
        handlePlayPause={handlePlayPause}
      />
    </>
  );
};

export default LoginPageLayout;
