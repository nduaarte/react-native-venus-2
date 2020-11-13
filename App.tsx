import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { store } from './src/redux/store';
import Routes from './src/Routes';
import { RootState } from './src/redux/reducers/ThemeReducer';
import { venus, nebula, ruby } from './src/Themes';


function App() {
  //const themeSelected = useSelector((state: RootState) => state.ThemeReducer.currentTheme);
  const [theme, setTheme] = useState(venus);

  // useEffect(() => {
  //   switch (themeSelected) {
  //     case 'nebula': setTheme(nebula);
  //     case 'venus': setTheme(venus);
  //     case 'ruby': setTheme(ruby);
  //   }
  // }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;