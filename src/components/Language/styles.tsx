import styled, { css } from 'styled-components';

export const DropDown = styled.div`
    ${({ theme }) => css`
    cursor:default;
    position: relative;
    display:flex;
    width: 180px;
    height: 30px;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    font-size: 10px;
    color: ${theme.colors.primaryColor};
    background-color: ${theme.colors.secondaryColor};
    &:hover ${DropDownContent}{
        display: flex;
        justify-content:center;
        flex-direction: column;
        align-items: center;
    }
    `}
`;
export const DropDownContent = styled.div`
    ${() => css`
    display: none;
    position: absolute;
    right: 1rem;
    top:3rem;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    min-width:100px;

    `}
`;
export const DropDownItem = styled.p`
    ${({ theme }) => css`
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
    text-align: center;
    background-color: ${theme.colors.secondaryColor};
    &:hover{
        background-color: ${theme.colors.primaryColor};
        color:${theme.colors.secondaryColor};
        cursor: pointer;
    }
    `}
`;
