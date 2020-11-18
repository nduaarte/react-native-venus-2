import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 7px 0;
`;

export const MusicPic = styled.Image`
  width: 60px;
  height: 60px;
`;

export const InfoContainer = styled.View`
  margin: 0 6px;
  width: 65%;
`;

export const Music = styled.Text`
  color: ${({ theme }) => theme.main};
  font-size: 18px;
  font-weight: 600;
`;

export const Artist = styled.Text`
  color: ${({ theme }) => theme.darkWhite};
  font-weight: 600;
`;

export const AddSound = styled.TouchableOpacity`
  align-items: center;
`;

