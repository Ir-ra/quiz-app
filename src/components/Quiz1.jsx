import usePagePath from "../hooks/usePagePath";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AnswerContext } from "../context/AnswerContext";
import { SingleSelectButton } from "./SingleSelectButton/SingleSelectButton";
import { FormattedMessage, useIntl } from "react-intl";
import { LOCALES } from "../localization/locales";

export const Quiz1 = ({ currentLocale, setCurrentLocale }) => {
  const { route, id } = usePagePath();
  const { saveAnswerToLocalStorage } = useContext(AnswerContext);
  const intl = useIntl();

  const languages = [
    intl.messages[`q_1_eng`],
    intl.messages[`q_1_fr`],
    intl.messages[`q_1_ge`],
    intl.messages[`q_1_se`],
  ];

  const getLocaleFromLanguage = (language) => {
    switch (language) {
      case 'English':
        return LOCALES.ENGLISH;
      case 'French':
        return LOCALES.FRENCH;
      case 'German':
        return LOCALES.GERMAN;
      case 'Spanish':
        return LOCALES.SPANISH;
      default:
        return LOCALES.ENGLISH;
    }
  };

  const handleLang = (locale) => {
    setCurrentLocale(locale);
    localStorage.setItem("locale", locale);
  };

  const handleLanguageClick = (lang) => {
    const locale = getLocaleFromLanguage(lang);
    saveAnswerToLocalStorage(id, lang, 'single-select');
    handleLang(locale);
  };

  return (
    <div>
      <p>
        <FormattedMessage id="question1" />
      </p>

      {languages.map(lang => (
        <div key={lang}>
          <SingleSelectButton
            item={lang}
            route={route}
            onClickHandler={handleLanguageClick}
            currentLocale={currentLocale}
            getLocaleFromLanguage={getLocaleFromLanguage}
          />
        </div>
      ))}
    </div>
  )
}

Quiz1.propTypes = {
  currentLocale: PropTypes.string.isRequired,
  setCurrentLocale: PropTypes.func.isRequired,
};