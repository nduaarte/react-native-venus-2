import React, { useContext, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';

import { 
  Container, 
  MusicPic, 
  InfoContainer, 
  Music, 
  Artist, 
  AddSound 
} from './styles';

interface propsTypes {
  id: string,
  image: string,
  music: string,
  artist: string,
}

function Track({ id, image, music, artist}: propsTypes) {
  const { main, lighter } = useContext(ThemeContext);
  const [hasSelect, setHasSelect] = useState(false);

  return (
    <Container key={id} activeOpacity={0.7}>
      <MusicPic source={image} />

      <InfoContainer>
        <Music>{music}</Music>
        <Artist>{artist}</Artist>
      </InfoContainer>

      <AddSound onPress={() => setHasSelect(true)}>
        <MaterialCommunityIcons name="library-plus" size={28} color={hasSelect ? main : lighter} />
      </AddSound>
    </Container>
  );
}

export default Track;