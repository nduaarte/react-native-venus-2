import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { store } from './src/redux/store';
import Routes from './src/Routes';
import { RootState } from './src/redux/reducers/ThemeReducer';
import theme from './src/Themes/ruby';

function App() {
  // const theme = useSelector((state: RootState) => state.ThemeReducer.currentTheme);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;