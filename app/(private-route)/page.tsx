"use client";
import { useEffect, useRef } from "react";

import Flex from "@/components/Flex";
import useIntersectionDetection from "@/hooks/useIntersectionDetection";
import {
  initialState,
  loadMusic,
  loadMusicList,
  updateActiveMusic,
  updateFilter,
  updateLoading,
} from "@/redux/features/music-slice";
import UseScroll from "@/utils/useScroll";
import { useDispatch, useSelector } from "react-redux";
import CustomSearchBar from "./components/CustomSearchBar";
import LoadingMusicList from "./components/LoadingMusicList";
import MusicList from "./components/MusicList";
import { getMusic, handleSearch } from "./helper";

const HomePage = () => {
  const { filter, isLoading, list } = useSelector(
    (state: AppReducerState) => state.musicappreducer
  );

  const offSetRef = useRef(0);
  const filterRef = useRef(filter);
  const triggerRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    onFirstRender();
  }, []);

  const onFirstRender = () => {
    UseScroll(0, 0);
    const initialFilterState = initialState?.filter;
    dispatch(updateFilter(initialFilterState));
    filterRef.current = initialFilterState;
    dispatch(updateLoading(true));
    laodMusic(filter);
  };

  const onSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateLoading(true));
    const { updatedFilter, data } = await handleSearch(e, filter);
    dispatch(updateLoading(false));
    dispatch(loadMusic(data));
    filterRef.current = updatedFilter;
    offSetRef.current = 0;
    dispatch(updateFilter(updatedFilter));
  };

  const laodMusic = async (filter: FilterType) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = (await getMusic(filter)) as any;
  
    if (data?.success) {
      const musicList = data?.data;
      dispatch(loadMusic(musicList));
      dispatch(updateActiveMusic(musicList[0]));
    } else {
      //show error message
    }
    dispatch(updateLoading(false));
  };

  const onLoadMore = async () => {
    if (isLoading) return;
    offSetRef.current = offSetRef.current + 12;
    dispatch(updateLoading(true));
    const updatedFilter = {
      ...filterRef.current,
      offset: offSetRef.current,
    };
    filterRef.current = updatedFilter;
    dispatch(updateFilter(updatedFilter));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res = (await getMusic(filter)) as any;
    
    if (res?.success) {
      dispatch(loadMusicList(res?.data));
    } else {
      // show error message
    }
    dispatch(updateLoading(false));
  };

  useIntersectionDetection({ triggerRef, callBack: onLoadMore });
  
  return (
    <Flex direction="column" style={{ marginTop: 100 }}>
      <CustomSearchBar filter={filter} onFilterChange={onSearch} />
      <MusicList list={list} />
      <Flex ref={triggerRef}>
        <LoadingMusicList isLoading={isLoading} />
      </Flex>
    </Flex>
  );
};

export default HomePage;
