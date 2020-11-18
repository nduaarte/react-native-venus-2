import React, { useEffect, useState, useRef, useContext } from 'react';
import { Audio } from 'expo-av';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';

import data from '../../../data';
import { RootState } from '../../../redux/reducers/MusicReducer';
import { Container, Button } from './styles';

const SoundManagement: React.FC = () => {
  const { main, lighter } = useContext(ThemeContext);
  const [isPlay, setIsPlay] = useState(false);
  const dispatch = useDispatch();
  const musicLink = useSelector((state: RootState) => state.MusicReducer.musicLink);
  const currentSound = useRef(new Audio.Sound());

  const [state, setState] = useState(true);
  useEffect(() => {
    loadSound();

    const interval = setInterval(() => {
      dispatchCurrentTime();
      return () => clearInterval(interval);
    }, 1000)
  }, []);

  const mountedRef = useRef(false);
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    changeSound();
  }, [musicLink])

  async function loadSound() {
    try {
      const sound = await currentSound.current.loadAsync(musicLink);
      dispatch({ type: 'UPDATE_CURRENT_SOUND_OBJECT', value: sound });
    } catch (err) {
      console.log('Erro ao carregar a música');
    }
  }

  async function dispatchCurrentTime() {
    try {
      const play = await currentSound.current.getStatusAsync();
      dispatch({ type: 'UPDATE_TOTAL_DURATION', value: play.durationMillis })
      dispatch({ type: 'UPDATE_CURRENT_DURATION', value: play.positionMillis });
    } catch (err) {
      console.log('Erro ao buscar informações da música');
    }
  }

  async function changeSound() {
    setState(false);
    try {
      await currentSound.current.unloadAsync();
      await loadSound();
      await playSound();
    } catch (err) {
      console.log('Erro ao descarregar a faixa atual')
    }
  }


  async function playSound() {
    setIsPlay(true);
    try {
      await currentSound.current.playAsync();
    } catch (err) {
      console.log(`Erro ao iniciar a música \n ${err}`);
    }
  }

  async function pauseSound() {
    setIsPlay(false);
    try {
      await currentSound.current.pauseAsync();
    } catch (err) {
      console.log(`Erro ao pausar a música \n ${err}`);
    }
  }

  let count = 0;
  function next() {
    count++;
    const currentTrack = data[count];

    dispatch({ type: 'UPDATE_MUSIC_ID', value: currentTrack.id });
    dispatch({ type: 'UPDATE_MUSIC_LINK', value: currentTrack.sound });
    dispatch({ type: 'UPDATE_MUSIC_IMAGE', value: currentTrack.image });
    dispatch({ type: 'UPDATE_MUSIC_NAME', value: currentTrack.music });
    dispatch({ type: 'UPDATE_ARTIST_NAME', value: currentTrack.artist });
  }

  return (
    <Container>
      <Button>
        <FontAwesome5 name="step-backward" size={20} color={lighter} />
      </Button>

      <Button onPress={isPlay ? () => pauseSound() : () => playSound()}>
        {isPlay
          ? <FontAwesome5 name='pause' size={20} color={main} />
          : <FontAwesome5 name='play' size={20} color={lighter} />
        }
      </Button>

      <Button onPress={() => next()} activeOpacity={0.5}>
        <FontAwesome5 name="step-forward" size={20} color={lighter} />
      </Button>
    </Container>
  );
}

export default SoundManagement;