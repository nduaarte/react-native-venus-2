import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

import theme from '../../../Theme';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  padding: 20px 0;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${theme.grey};

  padding: 15px 25px;
  border-radius: 50px;
  border: 2px ${theme.lighter};

  /* box-shadow: -1px -1px 2px ${theme.lighter}; */
  box-shadow: 2px 2px 2px ${theme.dark};

`;


