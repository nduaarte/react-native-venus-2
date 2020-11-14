export interface RootState {
  MusicReducer: any;
  musicName: string;
  artistName: string;
  totalDuration: number;
  currentDuration: number;
}

const INITIAL_STATE = {
  musicName: '',
  artistName: '',
  totalDuration: 100,
  currentDuration: 0
}

export default function MusicReducer(state = INITIAL_STATE, action: { type: any; value: any }) {
  switch (action.type) {
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