import { atom } from 'recoil';
import { songs } from './dummy';

interface LoginState {
  isLoggedIn: boolean;
  user: string | null; // user is either a string or null
}

export const loginState = atom<LoginState>({
  key: 'loginState',
  default: { isLoggedIn: false, user: null },
});

export interface TrackInfo {
  url: string;
  title: string;
  artist?: string;
  album?: string;
  genre?: string;
  date?: Date;
  artwork?: string;
  duration?: number;
  id?: number;
}

export const trackInfoState = atom<TrackInfo>({
  key: 'trackInfoState',
  default: {
    id: songs[0].id,
    title: songs[0].title,
    artist: songs[0].artist,
    genre: songs[0].genre,
    url: songs[0].url,
    artwork: songs[0].artwork,
  } as TrackInfo,
});
