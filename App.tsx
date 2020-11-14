import React from 'react';
import { Provider } from 'react-redux';

import { store } from './src/redux/store';
import ThemeComponent from './src';

function App() {
  return (
    <Provider store={store}>
      <ThemeComponent />
    </Provider>
  );
}

export default App;