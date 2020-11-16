import React from 'react';
import { Image } from 'react-native';

import imageMusicPic from '../../../images/musics/cogulandia.jpeg';
import { Container, MusicPic, InfoContainer, Music, Artist } from './styles';

const MusicInfo: React.FC = () => {
  const musicName = "Cogulândia";
  const artistName = "Matuê";

  return(
    <Container>
      <MusicPic source={imageMusicPic} />
      <InfoContainer>
        <Music>{musicName}</Music>
        <Artist>{artistName}</Artist>
      </InfoContainer>
    </Container>
  );
}

export default MusicInfo;