import { createContext } from 'react';
import { action, AppLanguageReducer } from './AppLanguageReducer';
import { useReducer } from 'react';
import { AppLanguageData, AppLanguageDatatype } from './data';

export type AppLanguageProviderProps = {
  children: React.ReactNode;
};

export type AppThemeContextValue = {
  state: AppLanguageDatatype;
  dispatch: React.Dispatch<action>;
};

export const AppLanguageContext = createContext<AppThemeContextValue>({
  state: { lang: 'pt' },
  dispatch: () => null,
});

export const AppLanguageProvider = ({ children }: AppLanguageProviderProps) => {
  const [state, dispatch] = useReducer(AppLanguageReducer, AppLanguageData);

  return (
    <AppLanguageContext.Provider value={{ state, dispatch }}>
      {children}
    </AppLanguageContext.Provider>
  );
};
