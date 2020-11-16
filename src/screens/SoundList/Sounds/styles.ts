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