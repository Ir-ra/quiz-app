import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AnswerContext } from "../../context/AnswerContext";
import usePagePath from "../../hooks/usePagePath";

import { MultipleButtonSelect } from "../MultipleButtonSelect";
import { Button } from "../Button/Button";
import { CircleLoader } from "../CircleLoader";
import { QuestionTitle } from "../QuestionTitle/QuestionTitle";
import { SubTitle } from "../SubTitle/SubTitle";

export const Quiz5 = ({ showLoading, setShowLoading }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const intl = useIntl();
  const { saveAnswerToLocalStorage } = useContext(AnswerContext);
  const { id } = usePagePath();
  const navigate = useNavigate();

  const arrOfTopics = Array.from({ length: 7 }, (_, index) => index + 1)

  const handleAnswerSelect = (answer) => {
    if (selectedOptions.includes(answer)) {
      setSelectedOptions(selectedOptions.filter(item => item !== answer));
    } else {
      setSelectedOptions([...selectedOptions, answer]);
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
        <QuestionTitle title={<FormattedMessage id="question5" />} />
        <SubTitle title={<FormattedMessage id="q_5_sub" />}/>

          {arrOfTopics.map(topic => (
            <div key={topic}>
              <MultipleButtonSelect
                item={topic}
                label={intl.messages[`q_5_opt${topic}`]}
                onChangeHandler={() => handleAnswerSelect(intl.messages[`q_5_opt${topic}`])}
                className={selectedOptions.includes(intl.messages[`q_5_opt${topic}`]) ? 'selected' : ''}
                displayAsCheckbox={false}
              />
            </div>
          ))}

          <Button
            buttonType='button'
            title={'Next'}
            onClick={handleNextButtonClick}
            styles={selectedOptions.length === 0 ? 'outline' : ''}
            disabled={selectedOptions.length === 0}
          />
        </>
      ) : (
        <CircleLoader />
      )}
    </>
  );
};
