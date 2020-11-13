import React, { useEffect, useState, useRef, useContext } from 'react';
import { Audio } from 'expo-av';
import { FontAwesome5 } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';

import { Container, Button } from './styles';

const SoundManagement: React.FC = () => {
  const { main, lighter } = useContext(ThemeContext); 
  const [isPlay, setIsPlay] = useState(false);
  const currentSound = useRef(new Audio.Sound());
  
  useEffect(() => {
    loadSound();
  }, []);

  async function loadSound() {
    try {
      await currentSound.current.loadAsync(require('../../../sounds/cogulandia.mp3'));
      console.log('load');
    } catch(err) {
      console.log(`Erro ao carregar a música \n ${err}`);
    }
  }

  async function playSound() {
    setIsPlay(true);
    try {
      await currentSound.current.playAsync();
      console.log('play');
    } catch(err) {
      console.log(`Erro ao iniciar a música \n ${err}`);
    }
  }

  async function pauseSound() {
    setIsPlay(false);
    try {
      await currentSound.current.pauseAsync();
      console.log('pause');
    } catch(err) {
      console.log(`Erro ao pausar a música \n ${err}`);
    }
  }

  return(
    <Container>
      <Button>
        <FontAwesome5 name="step-backward" size={20} color={lighter} />
      </Button>

      <Button onPress={ isPlay ? () => pauseSound() : () => playSound()}>
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