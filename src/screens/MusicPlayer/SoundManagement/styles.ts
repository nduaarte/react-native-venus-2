import styled from 'styled-components/native';
import { Pressable } from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  padding: 20px 0;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) =>  theme.grey};

  padding: 15px 25px;
  border-radius: 50px;
  border: 2px ${({ theme }) => theme.lighter};

  box-shadow: 2px 2px 2px ${({ theme }) => theme.dark};
`;


