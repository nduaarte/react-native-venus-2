import React, { useContext }from 'react';
import { View } from 'react-native';
import { ThemeContext } from 'styled-components';

import ThemesMenu from './ThemesMenu';
import MusicInfo from './MusicInfo';
import Slider from './Slider';
import SoundManagement from './SoundManagement';

const MusicPlayer: React.FC = () => {
  const { grey } = useContext(ThemeContext); 

  return(
    <View style={{flex: 1, backgroundColor: grey}}>
      <ThemesMenu />
      <MusicInfo />
      <Slider />
      <SoundManagement /> 
    </View>
  );
}

export default MusicPlayer;