import { NavLink } from "react-router-dom"
import usePagePath from "../hooks/usePagePath";
import { LOCALES } from "../i18n/locales";
import PropTypes from 'prop-types';

export const Quiz1 = ({ currentLocale, setCurrentLocale, onSave }) => {
  const { route, id } = usePagePath();
  const languages = ['english', 'french', 'german', 'spanish'];

  const handleLang = (locale, e) => {
    setCurrentLocale(locale);
    localStorage.setItem("locale", locale);

    setCurrentLocale(e.target.value);
    localStorage.setItem("locale", e.target.value);
  };

  const getLocaleFromLanguage = (language) => {
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

  const handleLanguageClick = (lang, saveAnswerToLocalStorage, handleLang) => {
    const locale = getLocaleFromLanguage(lang);
    saveAnswerToLocalStorage(lang);
    handleLang(locale);
  };



  return (
    <div>
      {id}
      <p>
        What is your preferred language?
      </p>

      {languages.map(lang => (
        <div key={lang}>
          <NavLink
            to={route}
            onClick={() => handleLanguageClick(lang, onSave, handleLang)}
            selected={currentLocale === getLocaleFromLanguage(lang)}
          >
            {lang}
          </NavLink>
        </div>
      ))}
    </div>
  )
}

Quiz1.propTypes = {
  currentLocale: PropTypes.string.isRequired,
  setCurrentLocale: PropTypes.func.isRequired,
  question: PropTypes.string,
  onSave: PropTypes.func
};