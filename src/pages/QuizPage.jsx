import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';

import { Quiz1 } from '../components/Quiz1';
import { Quiz2 } from '../components/Quiz2';
import { Quiz3 } from '../components/Quiz3';
import { Quiz4 } from '../components/Quiz4';
import { Quiz5 } from '../components/Quiz5';

import { NotFoundPage } from "./NotFoundPage";
import { useState } from "react";

// import { Woman } from '../assets/woman.png'

export const QuizPage = ({ currentLocale, setCurrentLocale }) => {
  const [showLoading, setShowLoading] = useState(true)
  const { id } = useParams();

  let quizContent;
  const quizComponents = {
    '1': <Quiz1 currentLocale={currentLocale} setCurrentLocale={setCurrentLocale} />,
    '2': <Quiz2 />,
    '3': <Quiz3 />,
    '4': <Quiz4 />,
    '5': <Quiz5 setShowLoading={setShowLoading} showLoading={showLoading} />,
  };
  quizContent = quizComponents[id] || <NotFoundPage />;

  return (
    <div>
      {showLoading ? (<p>{`${id}/5`}</p>) : ''}
         
      {quizContent}
    </div>
  )
}

QuizPage.propTypes = {
  currentLocale: PropTypes.string.isRequired,
  setCurrentLocale: PropTypes.func.isRequired
};
