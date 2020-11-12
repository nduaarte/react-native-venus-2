import React from 'react';
import { View } from 'react-native';
import theme from '../../Theme';

import ThemesMenu from './ThemesMenu';
import MusicInfo from './MusicInfo';
import Slider from './Slider';
import SoundManagement from './SoundManagement';

const MusicPlayer: React.FC = () => {
  return(
    <View style={{flex: 1, backgroundColor: theme.grey}}>
      <ThemesMenu />
      <MusicInfo />
      <Slider />
      <SoundManagement /> 
    </View>
  );
}

export default MusicPlayer;