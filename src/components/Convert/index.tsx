import { useContext, useState } from 'react';
import { allConverterMethod } from 'components/Convert/utils/allConverterMethod';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import * as Styled from './styles';
import { optionsToConvert } from './utils/optionsToConvert';
import { AppLanguageContext } from 'contexts/AppLanguageContext';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export type ConvertProps = {
  ConvertConfig?: {
    title: string;
    send: string;
    configResult: string;
    copy: string;
  };
};

export const Convert = ({
  ConvertConfig: { title, send, configResult, copy },
}: ConvertProps) => {
  const { state } = useContext(AppLanguageContext);
  const lang = state.lang;
  const [from, setFrom] = useState('hexadecimal');
  const [to, setTo] = useState('decimal');
  const [userValue, setUserValue] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userValue === '') return;
    const whoMethodCall = `${from}_to_${to}`.toUpperCase();
    const convertedValue = await allConverterMethod[whoMethodCall](
      userValue.toString(),
    );
    if (convertedValue === undefined) return;
    setResult(convertedValue);
    return;
  };

  const handleCopy = () => {
    if (result === '') return;
    navigator.clipboard.writeText(result);
  };

  return (
    <Styled.Wrapper>
      <h1>{title}</h1>
      <Styled.ConvertForm onSubmit={handleSubmit}>
        <Styled.Switch>
          <Styled.DropDown>
            {from}
            <Styled.DropDownContent>
              {optionsToConvert[lang].map((option) => (
                <Styled.DropDownItem
                  key={Math.random() * 500}
                  onClick={() => {
                    setFrom(option);
                  }}
                >
                  {option}
                </Styled.DropDownItem>
              ))}
            </Styled.DropDownContent>
            <ArrowDropDownIcon />
          </Styled.DropDown>
          <Styled.SwitchButton
            onClick={() => {
              setFrom(to);
              setTo(from);
            }}
          >
            <SwapHorizIcon />
          </Styled.SwitchButton>
          <Styled.DropDown>
            {to}
            <Styled.DropDownContent>
              {optionsToConvert[lang].map((option) => (
                <Styled.DropDownItem
                  key={Math.random() * 500}
                  onClick={() => {
                    setTo(option);
                  }}
                >
                  {option}
                </Styled.DropDownItem>
              ))}
            </Styled.DropDownContent>
            <ArrowDropDownIcon />
          </Styled.DropDown>
        </Styled.Switch>
        <Styled.InputArea
          placeholder={
            lang === 'pt'
              ? `Entre com o valor ${from}...`
              : ` Input your ${from} value...`
          }
          name="userValue"
          id="userValue"
          value={userValue}
          onChange={(e) => setUserValue(e.target.value)}
        />
        <Styled.SendContainer>
          <Styled.InputSend type="submit" value={send} />
        </Styled.SendContainer>
        <Styled.OutputArea
          name="resultValue"
          id="resultValue"
          placeholder={`${configResult}...`}
          disabled={true}
          value={result}
        />
        <Styled.SendContainer>
          <Styled.CopyWrapper onClick={handleCopy}>
            {`${copy}`}
            <span style={{ padding: '5px' }}></span>
            <ContentCopyIcon></ContentCopyIcon>
          </Styled.CopyWrapper>
        </Styled.SendContainer>
      </Styled.ConvertForm>
    </Styled.Wrapper>
  );
};
