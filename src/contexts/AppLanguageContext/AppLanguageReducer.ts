import { AppLanguageDatatype } from './data';
export type action = {
  type: 'SET_LANGUAGE' | null;
  payload: 'pt' | 'en';
};

export const AppLanguageReducer = (
  state: AppLanguageDatatype,
  action: action,
) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { lang: action.payload };

    default:
      return { ...state };
  }
};
