export interface RootState {
  ThemeReducer: any;
  currentTheme: string;
}

const INITIAL_STATE = {
  currentTheme: 'venus'
}

export default function ThemeReducer(state = INITIAL_STATE, action: { type: any, value: string}) {
  switch(action.type) {
    case 'UPDATE_THEME': 
      return { ...state, currentTheme: action.value }
    default:
      return state;
  }
}

export function actionUpdateTheme(value: string) {
  return { type: 'UPDATE_THEME', value };
};
