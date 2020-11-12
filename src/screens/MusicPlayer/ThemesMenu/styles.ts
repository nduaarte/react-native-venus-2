import styled from 'styled-components/native';
import theme from '../../../Theme';

export const Container = styled.View`
  margin: 40px 20px 30px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalSquare = styled.View`
  background-color: ${theme.grey};
  border-radius: 20px;
  padding: 50px 30px;
  box-shadow: 0px 0px 4px ${theme.ruby};

`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.white};
  margin-bottom: 35px;
`;

export const ButtonThemeContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

export const ThemeName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.darkWhite};
  margin: 0 3px;
`;

export const Button = styled.TouchableOpacity``;
