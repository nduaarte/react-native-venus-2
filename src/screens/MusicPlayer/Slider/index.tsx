import React, { useContext, useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { Bar } from 'react-native-progress';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';
import moment from 'moment';

import { RootState } from '../../../redux/reducers/MusicReducer';
import { Container, MusicTime, Times } from './styles';

const Slider: React.FC = () => {  
  const totalDurationMS = useSelector((state: RootState) => state.MusicReducer.totalDuration);
  const currentDurationMS = useSelector((state: RootState) => state.MusicReducer.currentDuration);
  const [musicTotalTime, setMusicTotalTime] = useState('');
  const [musicCurrentTime, setMusicCurrentTime] = useState('');

  const { main, light } = useContext(ThemeContext);
  const barCurrentValue = ((currentDurationMS * 100) / totalDurationMS) / 100;

  useEffect(() => {
    setMusicTotalTime(moment(totalDurationMS).format('mm:ss'))
    setMusicCurrentTime(moment(currentDurationMS).format('mm:ss'));
  }, [currentDurationMS]);

  return(
    <Container>
      <MusicTime>
        <Times>{musicCurrentTime}</Times>
        <Times>{musicTotalTime}</Times>
      </MusicTime>
      
      <Bar
        progress={barCurrentValue}
        width={300}
        height={5}
        borderWidth={2}
        borderRadius={15}
        borderColor={light}
        color={main}
      />
    </Container>
  );
}

export default Slider;