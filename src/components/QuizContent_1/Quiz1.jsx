import usePagePath from "../../hooks/usePagePath";
import { Fragment, useContext } from "react";
import { AnswerContext } from "../../context/AnswerContext";
import { FormattedMessage, useIntl } from "react-intl";
import { LOCALES } from "../../localization/locales";

import { SingleSelectButton } from "../SingleSelectButton/SingleSelectButton";
import { QuestionTitle } from "../QuestionTitle/QuestionTitle";
import { SubTitle } from "../SubTitle/SubTitle";
import { HorizontalSelect, QuestionText } from "./Quiz1.styled";

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
      <QuestionText>
        <QuestionTitle title={<FormattedMessage id="question1" />} />
        <SubTitle title={<FormattedMessage id="q_1_sub" />} />
      </QuestionText>

      <HorizontalSelect>
        {languages.map(lang => (
          <Fragment key={lang}>
            <SingleSelectButton
              item={lang}
              route={route}
              onClickHandler={handleLanguageClick}
              currentLocale={currentLocale}
              getLocaleFromLanguage={getLocaleFromLanguage}
            />
          </Fragment>
        ))}
      </HorizontalSelect>
    </div>
  );
};
