import { Language } from 'components/Language';
import { ToggleTheme } from 'components/ToggleTheme';
import * as Styled from './styles';

export const SetupNav = () => {
  return (
    <Styled.Wrapper>
      <ToggleTheme />
      <Language />
    </Styled.Wrapper>
  );
};
