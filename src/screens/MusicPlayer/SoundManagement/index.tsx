import React from 'react';
import theme from '../../../Theme';
import { FontAwesome5 } from '@expo/vector-icons';

import { Container, Button } from './styles';

const SoundManagement: React.FC = () => {
  const pause = false;

  return(
    <Container>
      <Button>
        <FontAwesome5 name="step-backward" size={20} color={theme.lighter} />
      </Button>

      <Button>
        {pause ? 
          <FontAwesome5 name='play' size={20} color={theme.lighter} />
          :
          <FontAwesome5 name='pause' size={20} color={theme.ruby} />
        }  
      </Button>

      <Button>
        <FontAwesome5 name="step-forward" size={20} color={theme.lighter} />
      </Button>
    </Container>
  );
}

export default SoundManagement;