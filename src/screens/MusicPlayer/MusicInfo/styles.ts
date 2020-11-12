import styled from 'styled-components/native';

import theme from '../../../Theme';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 120px;
`;

export const MusicPic = styled.Image`
  width: 250px;
  height: 250px;
  border-radius: 8px;
`;

export const InfoContainer = styled.View`
  align-items: center;
  margin: 8px 0;
`;

export const Title = styled.Text`
  color: ${theme.white};
  font-size: 25px;
  font-weight: 600;
`;

export const Artist= styled.Text`
  color: ${theme.darkWhite};
  font-size: 18px;
  font-weight: 600;
`;