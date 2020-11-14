import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 20px 8px;
  height: 100%;
`;

export const TitleContainer = styled.View`
  border-bottom-width: 1.5px;
  width: 90%;
  align-self: center;

  border-color: ${({ theme }) => theme.light};
  margin: 0 0 10px;
`;

export const Title = styled.Text`
  font-size: 32px;
  margin: 20px 0 10px;
  color: ${({ theme }) => theme.white};
  align-self: center;
`;

export const Sound = styled.TouchableOpacity`
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
`;

