import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { useIntl } from "react-intl";

import { Quiz1 } from '../components/Quiz1';
import { Quiz2 } from '../components/Quiz2';
import { Quiz3 } from '../components/Quiz3';
import { Quiz4 } from '../components/Quiz4';
import { Quiz5 } from '../components/Quiz5';

import { NotFoundPage } from "./NotFoundPage";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const QuizPage = ({ currentLocale, setCurrentLocale }) => {
  const [answers, setAnswers] = useLocalStorage('quizAnswers', {});

  const { id } = useParams();
  const intl = useIntl();

  const saveAnswerToLocalStorage = (selectedOption) => {
    setAnswers({
      ...answers,
      [id]: { question: intl.messages[`question${id}`], answer: selectedOption }
    });
  }

  let quizContent;

  switch (id) {
    case '1':
      quizContent = (
        <Quiz1 currentLocale={currentLocale} setCurrentLocale={setCurrentLocale} onSave={saveAnswerToLocalStorage} />
      );
      break;

    case '2':
      quizContent = (<Quiz2 onSave={saveAnswerToLocalStorage} />);
      break;

    case '3':
      quizContent = (<Quiz3 />);
      break;

    case '4':
      quizContent = (<Quiz4 />);
      break;

    case '5':
      quizContent = (<Quiz5 />);
      break;

    default:
      quizContent = (<NotFoundPage />);
  }

  return (
    <div>
      <p>{`${id}/5`}</p>
      {quizContent}
    </div>
  )
}

QuizPage.propTypes = {
  currentLocale: PropTypes.string.isRequired,
  setCurrentLocale: PropTypes.func.isRequired
};
