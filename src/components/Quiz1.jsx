import usePagePath from "../hooks/usePagePath";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AnswerContext } from "../context/AnswerContext";
import { SingleSelectButton } from "./SingleSelectButton/SingleSelectButton";
import { FormattedMessage } from "react-intl";
import { getLocaleFromLanguage } from "../localization/localesUtils";

export const Quiz1 = ({ currentLocale, setCurrentLocale }) => {
  const { route, id } = usePagePath();
  const { saveAnswerToLocalStorage } = useContext(AnswerContext)
  const languages = ['english', 'french', 'german', 'spanish'];

  const handleLang = (locale, e) => {
    setCurrentLocale(locale);
    localStorage.setItem("locale", locale);

    setCurrentLocale(e.target.value);
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