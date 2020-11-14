import React, { useEffect, useState, useRef, useContext } from 'react';
import { Audio } from 'expo-av';
import { useDispatch } from 'react-redux';

import { FontAwesome5 } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';

import { Container, Button } from './styles';


const SoundManagement: React.FC = () => {
  const { main, lighter } = useContext(ThemeContext);
  const [isPlay, setIsPlay] = useState(false);
  const currentSound = useRef(new Audio.Sound());
  const dispatch = useDispatch();
  let currentDuration: number;

  useEffect(() => {
    loadSound();

    const interval = setInterval(() => {
      dispatchCurrentTime();
      return () => clearInterval(interval);
    }, 1000)
  }, []);

  async function dispatchCurrentTime() {
    try {
      const play = await currentSound.current.getStatusAsync();
      dispatch({ type: 'UPDATE_TOTAL_DURATION', value: play.durationMillis })
      dispatch({ type: 'UPDATE_CURRENT_DURATION', value: play.positionMillis });
    } catch (err) {
      console.log('Erro ao buscar informações da música');
    }
  }

  async function loadSound() {
    try {
      await currentSound.current.loadAsync(require('../../../sounds/cogulandia.mp3'));
    } catch (err) {
      console.log(`Erro ao carregar a música \n ${err}`);
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

      <Button>
        <FontAwesome5 name="step-forward" size={20} color={lighter} />
      </Button>
    </Container>
  );
}

export default SoundManagement;