import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.secondaryColor};
        display: flex;
        align-items: center;
        justify-content:end;
        top:0.5rem;
        right:0;
        margin:0
    `}
`;
