import React, { useState, useContext } from 'react';
import { Modal } from 'react-native';
import { useDispatch } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';

import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import { Container, ModalContainer, ModalSquare, Title, ButtonThemeContainer, ThemeName, Button } from './styles';

const ThemesMenu: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { main } = useContext(ThemeContext);
  const dispatch = useDispatch();

  function dispatchTheme(theme: string) {
    dispatch({ type: 'UPDATE_THEME', value: theme });
    setShowModal(false);
  }

  const themesModal = (
    <Modal
      transparent
      animationType='fade'
      visible={showModal}
      presentationStyle='overFullScreen'>
      <ModalContainer>
        <ModalSquare>
          <Title>Selecione um Tema</Title>

          <ButtonThemeContainer onPress={() => dispatchTheme('venus')}>
            <MaterialCommunityIcons name="moon-full" size={40} color='#E9BA78' />
            <ThemeName>Venus (original)</ThemeName>
          </ButtonThemeContainer>

          <ButtonThemeContainer onPress={() => dispatchTheme('ruby')}>
            <MaterialCommunityIcons name="diamond" size={40} color='#8a2548' />
            <ThemeName>Ruby</ThemeName>
          </ButtonThemeContainer>

          <ButtonThemeContainer onPress={() => dispatchTheme('nebula')}>
            <FontAwesome5 name="squarespace" size={36} color='#893595' />
            <ThemeName>Nebula</ThemeName>
          </ButtonThemeContainer>
        </ModalSquare>
      </ModalContainer>
    </Modal>
  );

  return(
    <Container>
      <Button onPress={() => setShowModal(true)}>
        <Octicons name="gear" size={32} color={main} />
      </Button>

      {themesModal}
    </Container>
  );
}

export default ThemesMenu;

