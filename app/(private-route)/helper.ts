/* eslint-disable @typescript-eslint/no-explicit-any */
import services from "@/services";

export const initialMusic = {
  artistName: "",
  trackName: "",
  artworkUrl100: "",
  previewUrl: "",
  trackId: 0,
};

export const getMusic = async (filter: FilterType) => {
  const customPath =
    "?" +
    new URLSearchParams({
      ...filter,
      offset: filter?.offset?.toString(),
      limit: filter?.limit?.toString(),
    })?.toString();

  try {
    const {
      data: {
        data: { data, status },
      },
    } = (await services.get(`getSongs${customPath}`)) as {
      data: { data: { data: Array<Songs>; status: number } };
    };

    if (status === 200) {
      return { data, success: true };
    }
    return { data: null, success: false };
  } catch (err) {
    return { error: err || "Something Went Wrong" };
  }
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
      success,
    },
  } = (await debounceCell(onSearchCB, 500, value)) as {
    musicList: { data: MusicListTypes[]; success: boolean };
  };
  
  const updatedFilter = { ...filter, offset: 0, term: value };

  if (success) {
    return { updatedFilter, data };
  }
  return { updatedFilter: filter, data: [] };
  //show error message
};
