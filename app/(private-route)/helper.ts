/* eslint-disable @typescript-eslint/no-explicit-any */

import getMusic from "@/lib/getMusic";

export const initialMusic = {
  artistName: "",
  trackName: "",
  artworkUrl100: "",
  previewUrl: "",
  trackId: 0,
};

let timeId: any = 0;
export const debounceCell = (debFunction: any, time: number, value?: any) => {
  if (timeId) {
    clearTimeout(timeId);
  }
  return new Promise((response) => {
    timeId = setTimeout(async () => {
      const res = await debFunction(value);
      response(res);
    }, time);
  });
};

export const handleSearch = async (
  e: React.ChangeEvent<HTMLInputElement>,
  filter: FilterType
) => {
  const value = e?.target?.value;
  const onSearchCB = async (searchValue: string) => {
    const newFilters = { ...filter, term: searchValue };
    const musicResponse = await getMusic(newFilters);
    return { musicList: musicResponse };
  };

  const {
    musicList: {
      data,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      isSuccess,
    },
  } = (await debounceCell(onSearchCB, 500, value)) as {
    musicList: { data: MusicListTypes[]; isSuccess: boolean };
  };

  const updatedFilter = { ...filter, offset: 0, term: value };

  if (isSuccess) {
    return { updatedFilter, data };
  }
  return { updatedFilter: filter, data: [] };
  //show error message
};
