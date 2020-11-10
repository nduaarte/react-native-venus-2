import styled from 'styled-components/native';
import theme from '../../../Theme';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const MusicTime = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

export const Times = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: ${theme.lighter};
`;
