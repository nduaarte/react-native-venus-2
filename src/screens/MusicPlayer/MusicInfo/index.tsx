import React from 'react';
import { useSelector } from 'react-redux'

import { RootState } from '../../../redux/reducers/MusicReducer';
import { Container, MusicPic, InfoContainer, Music, Artist } from './styles';

const MusicInfo: React.FC = () => {
  const musicName = useSelector((state: RootState) => state.MusicReducer.musicName);
  const artistName = useSelector((state: RootState) => state.MusicReducer.artistName);
  const musicImage = useSelector((state: RootState) => state.MusicReducer.musicImage);

  return(
    <Container>
      <MusicPic source={musicImage} />
      <InfoContainer>
        <Music>{musicName}</Music>
        <Artist>{artistName}</Artist>
      </InfoContainer>
    </Container>
  );
}

export default MusicInfo;