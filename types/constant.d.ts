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
  loading: boolean;
  loadMoreMusicList?: Array;
  playMusic: boolean;
  musicList?: Array;
}

declare interface ToastState {
  isViewToast: boolean;
  message: string;
  type: "error" | "success" | "";
}

declare interface AppReducerState {
  userappreducer: MusicAppDataType;
  musicappreducer: UserDataType;
  toastappreducer: ToastState;
}

declare interface FilterType {
  term: string;
  offset: number;
  limit: number;
}

declare interface MusicListTypes {
  artworkUrl100: string;
  trackName: string;
  artistName: string;
  trackId: number;
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
