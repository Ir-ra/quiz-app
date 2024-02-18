import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CirculeLoader } from "./CircleLoader";
import { AnswerContext } from "../context/AnswerContext";
import usePagePath from "../hooks/usePagePath";


export const Quiz5 = ({ showLoading, setShowLoading }) => {
  const intl = useIntl();
  const navigate = useNavigate();
  const {saveAnswerToLocalStorage, answers} = useContext(AnswerContext);
  const { id } = usePagePath();

  const arrOfTopics = Array.from({ length: 7 }, (_, index) => index + 1)

  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswerSelect = (answer) => {
    if (selectedAnswers.includes(answer)) {
      setSelectedAnswers(selectedAnswers.filter(item => item !== answer));
      console.log('UNselected')
    } else {
      setSelectedAnswers([...selectedAnswers, answer]);
      console.log('selected')
    }
  };

  const handleNextButtonClick = () => {
    setShowLoading(false);
    saveAnswerToLocalStorage(id, selectedAnswers, 'bubble');

    setTimeout(() => {
      navigate('/email');
    }, 6000);
  };
console.log('q5 answers', answers[id-2]);


  return (
    <div>
      {showLoading ? (
        <>
          <p>
            <FormattedMessage id="question5" />
            <FormattedMessage id="q_5_sub" />
          </p>

          {arrOfTopics.map(topic => (
            <button
              key={topic}
              className={selectedAnswers.includes(intl.messages[`q_5_opt${topic}`]) ? 'selected' : ''}
              onClick={() => handleAnswerSelect(intl.messages[`q_5_opt${topic}`])}
            >
              {intl.messages[`q_5_opt${topic}`]}
            </button>
          ))}

          <div>
            <div onClick={handleNextButtonClick}>
              next
            </div>
          </div>
        </>
      ) : (
        <CirculeLoader />
      )}
    </div>
  )
}