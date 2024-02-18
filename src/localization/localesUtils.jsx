import { LOCALES } from "./locales";

export const getLocaleFromLanguage = (language) => {
  switch (language) {
    case 'english':
      return LOCALES.ENGLISH;
    case 'french':
      return LOCALES.FRENCH;
    case 'german':
      return LOCALES.GERMAN;
    case 'spanish':
      return LOCALES.SPANISH;
    default:
      return LOCALES.ENGLISH;
  }
};