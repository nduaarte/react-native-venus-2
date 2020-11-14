import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const MusicTime = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: 5px 0;
`;

export const Times = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: ${({ theme }) => theme.lighter};;
`;
