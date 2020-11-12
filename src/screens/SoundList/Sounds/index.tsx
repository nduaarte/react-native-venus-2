import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../../Theme';
import imageMusicPic from '../../../images/mushroom.jpeg';
import { Container, Title, Sound, MusicPic, InfoContainer, Music, Artist, AddSound } from './styles';

const Sounds: React.FC = () => {
  const musicName = "Cogulândia";
  const artistName = "Matuê";

  return(
    <Container>
      <Title>Biblioteca</Title>

      <Sound>
        <MusicPic  source={imageMusicPic}/>
        <InfoContainer>
          <Music>{musicName}</Music>
          <Artist>{artistName}</Artist>
        </InfoContainer>

        <AddSound>
          <MaterialCommunityIcons name="playlist-music" size={33} color={theme.ruby} />
        </AddSound>
      </Sound>
    </Container>
  );
}

export default Sounds;