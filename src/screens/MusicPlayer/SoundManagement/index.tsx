import React, { useEffect, useState } from 'react';
import theme from '../../../Theme';
import { Audio } from 'expo-av';
import { FontAwesome5 } from '@expo/vector-icons';

import { Container, Button } from './styles';

const SoundManagement: React.FC = () => {
  const [isPlay, setIsPlay] = useState(false);
  const currentSound = new Audio.Sound();
  
  useEffect(() => {
    loadSound();
  }, [isPlay]);

  async function loadSound() {
    try {
      await currentSound.loadAsync(require('../../../sounds/cogulandia.mp3'));
    } catch(err) {
      console.log(`Erro ao carregar a música \n ${err}`);
    }
  }

  async function playSound() {
    setIsPlay(true);
    try {
      await currentSound.playAsync();
    } catch(err) {
      console.log(`Erro ao iniciar a música \n ${err}`);
    }
  }

  async function pauseSound() {
    setIsPlay(false);
    try {
      await currentSound.pauseAsync();
    } catch(err) {
      console.log(`Erro ao pausar a música \n ${err}`);
    }
  }

  return(
    <Container>
      <Button>
        <FontAwesome5 name="step-backward" size={20} color={theme.lighter} />
      </Button>

      <Button onPress={ isPlay ? () => pauseSound() : () => playSound()}>
        {isPlay 
          ? <FontAwesome5 name='pause' size={20} color={theme.ruby} />
          : <FontAwesome5 name='play' size={20} color={theme.lighter} />
        }  
      </Button>

      <Button>
        <FontAwesome5 name="step-forward" size={20} color={theme.lighter} />
      </Button>
    </Container>
  );
}

export default SoundManagement;