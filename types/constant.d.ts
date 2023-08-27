type ChildrenType = string | JSX.Element;

type ChangeEventType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type OffSetRefType = React.MutableRefObject<number>;
type FilterRefType = React.MutableRefObject<FilterType>;
type TriggerRefType = React.MutableRefObject<null>;

interface ActionDataType {
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  locale: string;
  name: string;
  picture: string;
  sub: string;
}

interface UserDataType {
  userData: ActionDataType;
  userToken: string;
}

declare interface MusicAppDataType {
  list: Array;
  filter: FilterType;
  activeMusic: MusicType;
  isLoading: boolean;
  loadMoreMusicList?: Array;
  isPlayMusic: boolean;
  musicList?: Array;
}

declare interface ToastState {
  isViewToast: boolean;
  message: string;
  type?: "error" | "success";
}

declare interface AppReducerState {
  userappreducer: UserDataType;
  musicappreducer: MusicAppDataType;
  toastappreducer: ToastState;
}

declare interface FilterType {
  term: string;
  offset: number;
  limit: number;
  songid: string;
}

declare interface MusicListTypes {
  _id: string;
  artworkUrl100: string;
  trackName: string;
  artistName: string;
  trackId: number;
  country: string;
  longDescription: string;
  shortDescription: string;
  collectionName: string;
}

declare interface MusicType extends MusicListTypes {
  previewUrl: string;
}

declare interface MusicActionType {
  type: string;
  payload: MusicAppDataType;
}

declare interface SearchBarProps {
  onFilterChange: (event: ChangeEventType) => void;
  filter: FilterType;
}


declare interface Songs {
  artistName: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionArtistId: number;
  collectionArtistViewUrl: string;
  collectionCensoredName: string;
  collectionExplicitness: string;
  collectionHdPrice: number;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  collectionViewUrl: string;
  contentAdvisoryRating: string;
  country: string;
  currency: string;
  discCount: number;
  discNumber: number;
  hasITunesExtras: boolean;
  kind: string;
  longDescription: string;
  previewUrl: string;
  primaryGenreName: string;
  releaseDate: string;
  shortDescription: string;
  trackCensoredName: string;
  trackCount: number;
  trackExplicitness: string;
  trackHdPrice: number;
  trackHdRentalPrice: number;
  trackId: number;
  trackName: string;
  trackNumber: number;
  trackPrice: number;
  trackRentalPrice: number;
  trackTimeMillis: number;
  trackViewUrl: string;
  wrapperType: string;
}
