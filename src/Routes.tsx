import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MusicPlayer from './screens/MusicPlayer';
import SoundList from './screens/SoundList';

function Routes() {
  const { Navigator, Screen } = createBottomTabNavigator();

  return(
    <NavigationContainer>
      <Navigator>
        <Screen name='Tocando' component={MusicPlayer} />
        <Screen name='Músicas' component={SoundList} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;