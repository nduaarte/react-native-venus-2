import React, { useContext } from 'react';
import { Text } from 'react-native';
import Sliderr from '@react-native-community/slider';
import { ThemeContext } from 'styled-components';

import { Container, MusicTime, Times } from './styles';

const Slider: React.FC = () => {
  const { main, lighter, white } = useContext(ThemeContext);
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
        minimumTrackTintColor={main}
        maximumTrackTintColor={lighter}
        thumbTintColor={white}
      />
    </Container>
  );
}

export default Slider;