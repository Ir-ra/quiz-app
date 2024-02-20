import usePagePath from "../../hooks/usePagePath";
import { FormattedMessage, useIntl } from "react-intl";
import { AnswerContext } from "../../context/AnswerContext";
import { useContext } from "react";

import { SingleSelectButton } from "../SingleSelectButton/SingleSelectButton";
import { QuestionTitle } from "../QuestionTitle/QuestionTitle";
import { HorizontalSelect } from "./Quiz3.styled";

export const Quiz3 = () => {
  const { route, id } = usePagePath();
  const { saveAnswerToLocalStorage } = useContext(AnswerContext);
  const intl = useIntl();

  const handleAgeClick = (selectedAge) => {
    saveAnswerToLocalStorage(id, selectedAge, 'single-select');
  }

  const ages = ['18-29', '30-39', '40-49', '50+'];

  return (
    <div>
      <QuestionTitle title={<FormattedMessage id="question3" />} />

      <HorizontalSelect>
        {ages.map(age => (
          <div key={age}>
            <SingleSelectButton
              item={age === '50+' ? age : `${age} ${intl.messages.years}`}
              route={route}
              onClickHandler={() => handleAgeClick(age)}
            />
          </div>
        ))}
      </HorizontalSelect>
    </div>
  )
}
