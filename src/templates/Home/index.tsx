import * as Styled from './styles';
import { Convert } from 'components/Convert';
import { SetupNav } from 'components/SetupNav';
import { AppLanguageContext } from 'contexts/AppLanguageContext';
import { useContext } from 'react';
import { convertConfig } from 'config/convertConig';

function Home() {
  const { state } = useContext(AppLanguageContext);

  const lang = state.lang;
  return (
    <Styled.Wrapper>
      <SetupNav />
      <Convert ConvertConfig={convertConfig[lang]} />
    </Styled.Wrapper>
  );
}

export default Home;
