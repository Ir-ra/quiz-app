import usePagePath from "../hooks/usePagePath";
import { FormattedMessage, useIntl } from "react-intl";
import { useContext } from "react";
import { AnswerContext } from "../context/AnswerContext";

import womanImage from '../assets/woman.png';
import manImage from '../assets/man.png';
import winkImage from '../assets/wink.png';

import { SingleSelectButton } from "./SingleSelectButton/SingleSelectButton";

export const Quiz2 = () => {
  const { route, id } = usePagePath();
  const { saveAnswerToLocalStorage } = useContext(AnswerContext);
  const intl = useIntl();

  const genders = [
    intl.messages[`q_2_opt1`],
    intl.messages[`q_2_opt2`],
    intl.messages[`q_2_opt3`]
  ];

  const icons = [womanImage, manImage, winkImage]

  const handleGendreClick = (selectedGender) => {
    saveAnswerToLocalStorage(id, selectedGender, 'single-select')
  }

  return (
    <div>
      <p>
        <FormattedMessage id="question2" />
      </p>

      {genders.map((gender, i) => {
        console.log("gender", gender);
        return (
          <div key={gender}>
            <SingleSelectButton
              item={
                <>
                  <img src={icons[i]} alt={gender} id="icon" />
                  {gender}
                </>
              }
              route={route}
              onClickHandler={() => handleGendreClick(gender)}
            />
          </div>
        )
      })}
    </div>
  )
}
