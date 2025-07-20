import LocalizedStrings from 'react-native-localization';
import { en } from './en';
import { DeepObject } from './LocalizationProvider';
import { vi } from './vi';

export const i18n = {
  en: en,
  vi: vi,
};

const getNewLocalizedStrings = (i18nObj: DeepObject) => {
  return new LocalizedStrings(i18nObj);
};

const translations = new LocalizedStrings(i18n);

export { getNewLocalizedStrings, translations };
