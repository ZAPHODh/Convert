import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:${theme.colors.secondaryColor};
  color:${theme.colors.primaryColor};
  margin:0;
  padding: 0;
  `}
`;

export const ConvertForm = styled.form`
  ${({ theme }) => css`
  display: flex ;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${theme.colors.secondaryColor};
  color:${theme.colors.primaryColor};
  `}
`;
export const DropDown = styled.div`
    ${({ theme }) => css`
    cursor:default;
    position: relative;
    display:flex;
    width: 180px;
    height: 30px;
    justify-content: space-between;
    padding-left:10px ;
    align-items: center;
    border-radius: 5px;
    font-size: 10px;
    color: ${theme.colors.secondaryColor};
    background-color: ${theme.colors.primaryColor};
    &:hover ${DropDownContent}{
        display: flex;
        justify-content:center;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
    }
    `}
`;
export const DropDownContent = styled.div`
    ${() => css`
    display: none;
    position: absolute;
    top:3rem;
    left:-0.05rem;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    width:178px;

    `}
`;
export const DropDownItem = styled.p`
    ${({ theme }) => css`
    width: 100%;
    height: 100%;
    padding: 10px;
    padding-top: 5px;
    padding-bottom:5px;
    margin: 0;
    text-align: center;
    background-color: ${theme.colors.primaryColor};
    color:${theme.colors.secondaryColor};
    &:hover{
        background-color: ${theme.colors.secondaryColor};
        color:${theme.colors.primaryColor};
        cursor: pointer;
    }
    `}
`;
export const Switch = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
  `}
`;

export const SwitchButton = styled.span`
${() => css`
  &:hover{
    color:gray;
    cursor: pointer;
  }
`}
`;

export const InputArea = styled.textarea`
  ${({ theme }) => css`
  font-size: 8px;
  background-color:${theme.colors.primaryColor};
  color: ${theme.colors.secondaryColor};
  resize: vertical;
  border-radius: 5px;
  width: 90%;
  height: 100px;
  margin:0;
  padding: 5px;
  &:focus{
    outline: none;
  }
  &:placeholder-shown{

    color: gray;
    font-size: 8px;
  }
  `}
`;

export const SendContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
`;

export const InputSend = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.secondaryColor};
    padding: 5px;
    border-radius: 3px;
    border: 1px solid ${theme.colors.primaryColor};
    &:hover{
      cursor: pointer;
      background-color: transparent;
      color: ${theme.colors.primaryColor};
      border: 1px solid ${theme.colors.primaryColor};
    }
  `}
`;

export const OutputArea = styled.textarea`
  ${({ theme }) => css`
  font-size: 8px;
  background-color:${theme.colors.mediumGray};
  color: black;
  resize: vertical;
  border-radius: 5px;
  width: 90%;
  height: 50px;
  margin:0;
  padding: 5px;
  &:focus{
    outline: none;
  }
  `}
`;

export const CopyWrapper = styled.div`
  ${({ theme }) => css`
  font-size: 10px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 3px;
  background-color: ${theme.colors.primaryColor};
  border: 1px solid ${theme.colors.primaryColor};
  color:${theme.colors.secondaryColor};
  &:hover{
    cursor: pointer;
      background-color: transparent;
      color: ${theme.colors.primaryColor};
      border: 1px solid ${theme.colors.primaryColor};
  }
  `}
`;
