import React from 'react';
import { Image } from 'react-native';

import imageMusicPic from '../../../images/mushroom.jpeg';
import { Container, MusicPic, InfoContainer, Title, Artist } from './styles';

const MusicInfo: React.FC = () => {
  const musicName = "Cogulândia";
  const artistName = "Matuê";

  return(
    <Container>
      <MusicPic source={imageMusicPic} />
      <InfoContainer>
        <Title>{musicName}</Title>
        <Artist>{artistName}</Artist>
      </InfoContainer>
    </Container>
  );
}

export default MusicInfo;