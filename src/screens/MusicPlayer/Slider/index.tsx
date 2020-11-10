import React from 'react';
import { Text } from 'react-native';
import Sliderr from '@react-native-community/slider';
import theme from '../../../Theme';

import { Container, MusicTime, Times } from './styles';

const Slider: React.FC = () => {
  // Redux
  const minValue = 0;
  const maxValue = 100;
  const currentMusicTime = 0;
  const totalMusicTime = 10.3;

  return(
    <Container>
      <MusicTime>
        <Times>{currentMusicTime}</Times>
        <Times>{totalMusicTime}</Times>
      </MusicTime>
      
      <Sliderr
        style={{width: '85%'}}
        minimumValue={minValue}
        maximumValue={maxValue}
        minimumTrackTintColor={theme.ruby}
        maximumTrackTintColor={theme.lighter}
        thumbTintColor={theme.white}
      />
    </Container>
  );
}

export default Slider;