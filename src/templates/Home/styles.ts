import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  background-color:${theme.colors.secondaryColor};
  margin:0;
  padding:0;
  width: 100vw;
  height: 100vh;
  `}
`;
