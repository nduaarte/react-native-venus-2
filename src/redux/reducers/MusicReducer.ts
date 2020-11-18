export interface RootState {
  MusicReducer: any;
  musicId: number;
  currentSoundObject: any;
  musicLink: any;
  musicImage: any;
  musicName: string;
  artistName: string;
  totalDuration: number;
  currentDuration: number;
}

const INITIAL_STATE = {
  musicId: 1,
  currentSoundObject: null,
  musicLink: require('../../sounds/cogulandia.mp3'),
  musicImage: require('../../images/musics/cogulandia.jpeg'),
  musicName: 'Cogulândia',
  artistName: 'Matuê',
  totalDuration: 100,
  currentDuration: 0
}

export default function MusicReducer(state = INITIAL_STATE, action: { type: any; value: any }) {
  switch (action.type) {
    case 'UPDATE_MUSIC_ID':
      return { ...state, musicId: action.value }
    case 'UPDATE_CURRENT_SOUND_OBJECT':
      return { ...state, currentSoundObject: action.value }
    case 'UPDATE_MUSIC_LINK':
      return { ...state, musicLink: action.value }
    case 'UPDATE_MUSIC_IMAGE':
      return { ...state, musicImage: action.value }
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

export function actionUpdateCurrentSoundObject(value: any) {
  return { type: 'UPDATE_CURRENT_SOUND_OBJECT', value };
};

export function actionUpdateMusicLink(value: any) {
  return { type: 'UPDATE_MUSIC_LINK', value };
};

export function actionUpdateMusicImage(value: any) {
  return { type: 'UPDATE_MUSIC_IMAGE', value };
};

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