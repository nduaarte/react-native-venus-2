export interface RootState {
  ThemeReducer: any;
  currentTheme: object;
}

const INITIAL_STATE = {
  currentTheme: ''
}

export default function ThemeReducer(state = INITIAL_STATE, action: { type: any, value: object}) {
  switch(action.type) {
    case 'UPDATE_THEME': 
      return { ...state, currentTheme: action.value }
    default:
      return state;
  }
}

export function actionUpdateTheme(value: object) {
  return { type: 'UPDATE_THEME', value };
};
