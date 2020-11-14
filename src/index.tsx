import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import Routes from './Routes';
import { RootState } from './redux/reducers/ThemeReducer';
import { venus, emerald, ruby } from './Themes';


function ThemeComponent() {
  const themeSelected = useSelector((state: RootState) => state.ThemeReducer.currentTheme);
  const [theme, setTheme] = useState(ruby);

  useEffect(() => {
    switch (themeSelected) {
      case 'emerald': 
        setTheme(emerald);
        break;
      case 'venus': 
        setTheme(venus);
        break;
      case 'ruby': 
        setTheme(ruby);
        break;
    }
  }, [themeSelected]); 

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default ThemeComponent;