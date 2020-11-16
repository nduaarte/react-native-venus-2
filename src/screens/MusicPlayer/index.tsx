import React, { useContext }from 'react';
import { View } from 'react-native';
import { ThemeContext } from 'styled-components';

import ThemesMenu from './ThemesMenu';
import MusicInfo from './MusicInfo';
import Slider from './Slider';
import SoundManagement from './SoundManagement';

const MusicPlayer: React.FC = () => {
  const { dark } = useContext(ThemeContext); 

  return(
    <View style={{flex: 1, backgroundColor: dark}}>
      <ThemesMenu />
      <MusicInfo />
      <Slider />
      <SoundManagement /> 
    </View>
  );
}

export default MusicPlayer;