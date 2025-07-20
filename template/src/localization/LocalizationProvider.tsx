import React, {createContext, useCallback, useContext, useState} from 'react';
import {LocalizedStrings} from 'react-native-localization';
import {getNewLocalizedStrings, translations} from './translation';

export const DEFAULT_LANGUAGE = 'en';

interface LocalizationContextType {
  translations: LocalizedStrings<object>;
  setAppLanguage: (language: string) => void;
  appLanguage: string;
  setContent?: (i18nObj: DeepObject) => void;
}

export type DeepObject = Record<string, string | object>;

export const LocalizationContext = createContext<LocalizationContextType>({
  translations,
  setAppLanguage: () => null,
  appLanguage: DEFAULT_LANGUAGE,
});

export const LocalizationProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);
  const [localizedStrings, setLocalizedStrings] =
    useState<LocalizedStrings<object>>(translations);

  const setContent = useCallback((i18nObj: DeepObject) => {
    const newLocalized = getNewLocalizedStrings(i18nObj);
    setLocalizedStrings(newLocalized);
  }, []);

  const setLanguage = (language: string) => {
    localizedStrings.setLanguage(language);
    setAppLanguage(language);
  };

  return (
    <LocalizationContext.Provider
      value={{
        translations: localizedStrings,
        appLanguage,
        setAppLanguage: setLanguage,
        setContent,
      }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => useContext(LocalizationContext);
