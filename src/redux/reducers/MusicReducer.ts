export interface RootState {
  MusicReducer: any;
  musicId: number;
  musicLink: any;
  musicName: string;
  artistName: string;
  totalDuration: number;
  currentDuration: number;
}

const INITIAL_STATE = {
  musicId: 0,
  musicLink: require('../../sounds/cogulandia.mp3'),
  musicName: '',
  artistName: '',
  totalDuration: 100,
  currentDuration: 0
}

export default function MusicReducer(state = INITIAL_STATE, action: { type: any; value: any }) {
  switch (action.type) {
    case 'UPDATE_MUSIC_ID':
      return { ...state, musicId: action.value }
    case 'UPDATE_MUSIC_LINK':
      return { ...state, musicLink: action.value }
    case 'UPDATE_MUSIC_NAME':
      return { ...state, musicName: action.value }
    case 'UPDATE_ARTIST_NAME':
      return { ...state, artistName: action.value }
    case 'UPDATE_TOTAL_DURATION':
      return { ...state, totalDuration: action.value }
    case 'UPDATE_CURRENT_DURATION':
      return { ...state, currentDuration: action.value }
    default:
      return state;
  }
}

export function actionUpdateMusicId(value: number) {
  return { type: 'UPDATE_MUSIC_ID', value };
};

export function actionUpdateMusicLink(value: any) {
  return { type: 'UPDATE_MUSIC_LINK', value};
}

export function actionUpdateMusicName(value: string) {
  return { type: 'UPDATE_MUSIC_NAME', value };
};

export function actionUpdateArtistName(value: string) {
  return { type: 'UPDATE_ARTIST_NAME', value };
};

export function actionUpdateTotalDuration(value: number) {
  return { type: 'UPDATE_TOTAL_DURATION', value };
};

export function actionUpdateCurrentDuration(value: number) {
  return { type: 'UPDATE_CURRENT_DURATION', value };
};