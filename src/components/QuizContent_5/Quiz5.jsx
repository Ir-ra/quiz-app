import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AnswerContext } from "../../context/AnswerContext";
import usePagePath from "../../hooks/usePagePath";

import { MultipleButtonSelect } from "../MultipleSelectButton/MultipleButtonSelect";
import { Button } from "../Button/Button";
import { CircleLoader } from "../Loaders/CircleLoader";
import { QuestionTitle } from "../QuestionTitle/QuestionTitle";
import { SubTitle } from "../SubTitle/SubTitle";

import warewolf from '../../assets/wolf.svg';
import action from '../../assets/action.svg';
import crown from '../../assets/crown.svg';
import money from '../../assets/money.svg';
import hearts from '../../assets/hearts.svg';
import youngAdult from '../../assets/youngAdult.svg';
import cowboy from '../../assets/cowboy.svg';

import { BubbleSelectStyles, CirleContainer, QuestionText, TopicIcon, TopicItem, TopicText } from "./Quiz5.styled";

export const Quiz5 = ({ showLoading, setShowLoading }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const intl = useIntl();
  const { saveAnswerToLocalStorage } = useContext(AnswerContext);
  const { id } = usePagePath();
  const navigate = useNavigate();

  const topics = [
    [intl.messages[`q_5_opt1`], warewolf],
    [intl.messages[`q_5_opt2`], action],
    [intl.messages[`q_5_opt3`], crown],
    [intl.messages[`q_5_opt4`], money],
    [intl.messages[`q_5_opt5`], hearts],
    [intl.messages[`q_5_opt6`], youngAdult],
    [intl.messages[`q_5_opt7`], cowboy],
  ]

  const handleAnswerSelect = (answer) => {
    if (selectedOptions.includes(answer)) {
      setSelectedOptions(selectedOptions.filter(item => item !== answer));
    } else {
      if (selectedOptions.length < 3) {
        setSelectedOptions([...selectedOptions, answer]);
      }
    }
  };

  const handleNextButtonClick = () => {
    setShowLoading(false);
    saveAnswerToLocalStorage(id, selectedOptions, 'bubble');

    setTimeout(() => {
      navigate('/email');
    }, 6000);
  };

  return (
    <>
      {showLoading ? (
        <>
          <div>
            <QuestionText>
              <QuestionTitle title={<FormattedMessage id="question5" />} />
              <SubTitle title={<FormattedMessage id="q_5_sub" />} />
            </QuestionText>

            <BubbleSelectStyles>
              {topics.map((topic, i) => {
                const top = intl.messages[`q_5_opt${i + 1}`]

                return (
                  <div key={topic}>
                    <MultipleButtonSelect
                      label={
                        <TopicItem>
                          <TopicIcon src={topic[1]} alt={`${topic}`} />
                          <TopicText>{top}</TopicText>
                        </TopicItem>
                      }
                      onChangeHandler={() => handleAnswerSelect(intl.messages[`q_5_opt${i + 1}`])}
                      className={selectedOptions.includes(intl.messages[`q_5_opt${i + 1}`]) ? 'bubbl' : ''}
                      type='vertical'
                      displayAsCheckbox={false}
                    />
                  </div>
                )
              })}
            </BubbleSelectStyles>
          </div>

          <Button
            buttonType='button'
            title={'Next'}
            onClick={handleNextButtonClick}
            styles={selectedOptions.length === 0 ? 'outline' : ''}
            disabled={selectedOptions.length === 0}
          />
        </>
      ) : (
        <CirleContainer>
          <CircleLoader />
        </CirleContainer>
      )}
    </>
  );
};
