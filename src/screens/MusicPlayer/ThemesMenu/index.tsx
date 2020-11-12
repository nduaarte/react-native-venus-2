import React, { useState } from 'react';
import { Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import theme from '../../../Theme';
import { Container, ModalContainer, ModalSquare, Title, ButtonThemeContainer, ThemeName, Button } from './styles';

const ThemesMenu: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const themesModal = (
    <Modal
      transparent
      animationType='fade'
      visible={showModal}
      presentationStyle='overFullScreen'>
      <ModalContainer>
        <ModalSquare>
          <Title>Selecione um Tema</Title>

          <ButtonThemeContainer onPress={() => setShowModal(false)}>
            <MaterialCommunityIcons name="moon-full" size={40} color={theme.venus} />
            <ThemeName>Venus (original)</ThemeName>
          </ButtonThemeContainer>

          <ButtonThemeContainer onPress={() => setShowModal(false)}>
            <MaterialCommunityIcons name="diamond" size={40} color={theme.ruby} />
            <ThemeName>Ruby</ThemeName>
          </ButtonThemeContainer>

          <ButtonThemeContainer onPress={() => setShowModal(false)}>
            <FontAwesome5 name="squarespace" size={36} color={theme.nebula} />
            <ThemeName>Nebula</ThemeName>
          </ButtonThemeContainer>
        </ModalSquare>
      </ModalContainer>
    </Modal>
  );

  return(
    <Container>
      <Button onPress={() => setShowModal(true)}>
        <Octicons name="gear" size={32} color={theme.ruby} />
      </Button>

      {themesModal}
    </Container>
  );
}

export default ThemesMenu;

