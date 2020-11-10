import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import theme from './Theme';
import MusicPlayer from './screens/MusicPlayer';
import SoundList from './screens/SoundList';

function Routes() {
  const { Navigator, Screen } = createBottomTabNavigator();

  return(
    <NavigationContainer>
      <Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Música') {
              iconName = 'music'
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            } else if (route.name === 'Biblioteca') {
              iconName = 'folder-music';
              return <Entypo name={iconName} size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: theme.ruby,
          style: {
            backgroundColor: theme.dark,
            borderTopColor: theme.light
          }
        }}
        >
        <Screen name='Música' component={MusicPlayer} />
        <Screen name='Biblioteca' component={SoundList} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;