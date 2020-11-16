import React from 'react';
import { FlatList } from 'react-native';

import Track from '../../../components/Track';
import data from '../../../data';
import { Container, TitleContainer, Title } from './styles';

const Sounds: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Biblioteca</Title>
      </TitleContainer>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Track
            id={item.id}
            image={item.image}
            music={item.music}
            artist={item.artist}
          />
        )}
      />
    </Container>
  );
}

export default Sounds;