import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 20px 8px;
`;

export const Sound = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  margin: 20px 0;
  color: ${({ theme }) => theme.white};
  align-self: center;
`;

export const MusicPic = styled.Image`
  width: 60px;
  height: 60px;
`;

export const InfoContainer = styled.View`
  margin: 0 6px;
`;

export const Music = styled.Text`
  color: ${({ theme }) => theme.white};
  font-size: 18px;
  font-weight: 600;
`;

export const Artist = styled.Text`
  color: ${({ theme }) => theme.darkWhite};
  font-weight: 600;
`;

export const AddSound = styled.TouchableOpacity`
  align-items: center;
  margin: 0 0 0 37%;
`;

