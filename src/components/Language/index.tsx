import { AppLanguageContext } from 'contexts/AppLanguageContext';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { useContext, useEffect } from 'react';

import * as Styled from './styles';

export const Language = () => {
  const { state, dispatch } = useContext(AppLanguageContext);

  useEffect(() => {
    const localLang = localStorage.getItem('language') as 'en' | 'pt';
    if (!localLang) return;
    dispatch({
      type: 'SET_LANGUAGE',
      payload: localLang,
    });
  }, [dispatch]);

  const handleClick = (chosen: 'pt' | 'en') => {
    if (state.lang === chosen) return;
    dispatch({
      type: 'SET_LANGUAGE',
      payload: chosen,
    });

    localStorage.setItem('language', chosen);
  };

  return (
    <Styled.DropDown>
      <p>
        {state.lang === 'pt'
          ? `Linguagem selecioanda: ${state.lang}`
          : `Selected Language: ${state.lang}`}
      </p>
      <ArrowDropDownIcon />
      <Styled.DropDownContent>
        <Styled.DropDownItem
          onClick={() => {
            handleClick('pt');
          }}
        >
          {state.lang === 'pt' ? 'Português' : 'Portuguese'}
        </Styled.DropDownItem>
        <Styled.DropDownItem
          onClick={() => {
            handleClick('en');
          }}
        >
          {state.lang === 'pt' ? 'Inglês' : 'English'}
        </Styled.DropDownItem>
      </Styled.DropDownContent>
    </Styled.DropDown>
  );
};
