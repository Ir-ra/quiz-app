import usePagePath from "../../hooks/usePagePath";
import { FormattedMessage, useIntl } from "react-intl";
import { Fragment, useContext } from "react";
import { AnswerContext } from "../../context/AnswerContext";

import womanImage from '../../assets/woman.png';
import manImage from '../../assets/man.png';
import winkImage from '../../assets/wink.png';

import { SingleSelectButton } from "../SingleSelectButton/SingleSelectButton";
import { QuestionTitle } from "../QuestionTitle/QuestionTitle";
import { SubTitle } from "../SubTitle/SubTitle";
import { GenderIcon, GenderItem, VerticalSelect } from "./Quiz2.styled";

export const Quiz2 = () => {
  const { route, id } = usePagePath();
  const { saveAnswerToLocalStorage } = useContext(AnswerContext);
  const intl = useIntl();

  const genders = [
    intl.messages[`q_2_opt1`],
    intl.messages[`q_2_opt2`],
    intl.messages[`q_2_opt3`]
  ];

  const icons = [womanImage, manImage, winkImage];

  const handleGendreClick = (selectedGender) => {
    saveAnswerToLocalStorage(id, selectedGender, 'single-select');
  }

  return (
    <div>
      <QuestionTitle title={<FormattedMessage id="question2" />} />

      <SubTitle title={<FormattedMessage id="q_2_sub" />}/>

      <VerticalSelect>
        {genders.map((gender, i) => {
          return (
            <Fragment key={gender}>
              <SingleSelectButton
                item={
                  <GenderItem>
                    <GenderIcon src={icons[i]} alt={gender} />
                    <p>{gender}</p>
                  </GenderItem>
                }
                route={route}
                onClickHandler={() => handleGendreClick(gender)}
                type='vertical'
              />
            </Fragment>
          )
        })}
      </VerticalSelect>
    </div>
  );
};
