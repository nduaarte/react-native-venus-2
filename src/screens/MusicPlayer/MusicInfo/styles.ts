import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
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
  color: ${({ theme }) => theme.white};
  font-size: 25px;
  font-weight: 600;
`;

export const Artist= styled.Text`
  color: ${({ theme }) => theme.darkWhite};
  font-size: 18px;
  font-weight: 600;
`;
