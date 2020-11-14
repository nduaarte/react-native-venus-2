import React, { useContext, useState } from 'react';
import { FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';

import mushroom from '../../../images/mushroom.jpeg';
import data from '../../../data';
import { 
  Container, 
  TitleContainer, 
  Title, Sound, 
  MusicPic, 
  InfoContainer, 
  Music, 
  Artist, 
  AddSound 
} from './styles';

const Sounds: React.FC = () => {
  const { main, lighter } = useContext(ThemeContext);
  const [hasSelect, setHasSelect] = useState(false);

  return (
    <Container>
      <TitleContainer>
        <Title>Biblioteca</Title>
      </TitleContainer>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
        <Sound key={item.id} activeOpacity={0.7}>
          <MusicPic source={mushroom} />

          <InfoContainer>
            <Music>{item.music}</Music>
            <Artist>{item.artist}</Artist>
          </InfoContainer>
    
          <AddSound onPress={() => setHasSelect(true)}>
            <MaterialCommunityIcons name="library-plus" size={28} color={hasSelect ? main : lighter} />
          </AddSound>
        </Sound>
        )}
      />
    </Container>
  );
}

export default Sounds;