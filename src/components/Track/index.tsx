import React, { useContext, useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';
import { useDispatch, useSelector } from "react-redux";

import data from '../../data/index';

import { 
  Container, 
  MusicPic, 
  InfoContainer, 
  Music, 
  Artist, 
  AddSound 
} from './styles';

interface propsTypes {
  id: number,
  image: string,
  music: string,
  artist: string,
}

function Track({ id, image, music, artist}: propsTypes) {
  const { main, lighter, white, darkWhite } = useContext(ThemeContext);
  const [hasSelect, setHasSelect] = useState(false);
  const dispatch = useDispatch();

  const currentTrack = data[id-1];
  function dispatchNewCurrentTrack() {
    setHasSelect(true);
    dispatch({ type: 'UPDATE_MUSIC_ID', value: currentTrack.id });
    dispatch({ type: 'UPDATE_MUSIC_LINK', value: currentTrack.sound });
    dispatch({ type: 'UPDATE_MUSIC_IMAGE', value: currentTrack.image });
    dispatch({ type: 'UPDATE_MUSIC_NAME', value: currentTrack.music });
    dispatch({ type: 'UPDATE_ARTIST_NAME', value: currentTrack.artist });
  }

  return (
    <Container key={id} activeOpacity={0.7} onPress={() => dispatchNewCurrentTrack()}>
      <MusicPic source={image} />

      <InfoContainer>
        <Music>{music}</Music>
        <Artist>{artist}</Artist>
      </InfoContainer>

      <AddSound>
        <MaterialCommunityIcons name="library-plus" size={28} color={hasSelect ? main : lighter} />
      </AddSound>
    </Container>
  );
}

export default Track;