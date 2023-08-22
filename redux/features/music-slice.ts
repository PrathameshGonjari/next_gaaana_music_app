import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  list: [],
  filter: {
    term: "top 100",
    offset: 0,
    limit: 12,
  },
  activeMusic: {},
  playMusic: false,
  loading: false,
} as MusicAppDataType;

export const handleAddMusic = (
  state: MusicAppDataType,
  action: PayloadAction<MusicListTypes[]>
) => {
  const musicList = action.payload;
  return {
    ...state,
    list: musicList,
  };
};

export const handleLoadMusicList = (
  state: MusicAppDataType,
  action: PayloadAction<MusicListTypes[]>
) => {
  const loadMoreMusicList = action.payload;
  return {
    ...state,
    list: [...state.list, ...loadMoreMusicList],
  };
};

export const handleFilter = (
  state: MusicAppDataType,
  action: PayloadAction<FilterType>
) => {
  const filter = action.payload;
  return {
    ...state,
    filter,
  };
};

export const handleActiveMusic = (
  state: MusicAppDataType,
  action: PayloadAction<MusicType>
) => {
  const activeMusic = action.payload;
  return {
    ...state,
    activeMusic,
  };
};

export const handleLoading = (
  state: MusicAppDataType,
  action: PayloadAction<boolean>
) => {
  const isLoading = action.payload;
  return {
    ...state,
    isLoading,
  };
};

export const handlePlayPause = (
  state: MusicAppDataType,
  action: PayloadAction<boolean>
) => {
  const isPlayMusic = action.payload;
  return {
    ...state,
    isPlayMusic,
  };
};

export const music = createSlice({
  name: "music",
  initialState,
  reducers: {
    loadMusic: handleAddMusic,
    loadMusicList: handleLoadMusicList,
    updateFilter: handleFilter,
    updateActiveMusic: handleActiveMusic,
    updateLoading: handleLoading,
    playPause: handlePlayPause,
  },
});

export const {
  loadMusic,
  loadMusicList,
  updateFilter,
  updateActiveMusic,
  updateLoading,
  playPause,
} = music.actions;
export default music.reducer;
