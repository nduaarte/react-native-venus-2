import React, { useState, useContext } from 'react';
import { Modal } from 'react-native';
import { useDispatch } from 'react-redux';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';

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
            <MaterialCommunityIcons name="ruby" size={37} color='#8a2548' />
            <ThemeName>Ruby</ThemeName>
          </ButtonThemeContainer>

          <ButtonThemeContainer onPress={() => dispatchTheme('emerald')}>
            <MaterialCommunityIcons name="diamond-stone" size={40} color='#296328' />
            <ThemeName>Esmeralda</ThemeName>
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

