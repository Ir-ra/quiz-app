import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { Quiz1 } from '../components/QuizSelectorP1/Quiz1';
import { Quiz2 } from '../components/QuizSelectorP2/Quiz2';
import { Quiz3 } from '../components/Quiz3';
import { Quiz4 } from '../components/QuizSelectorP4/Quiz4';
import { Quiz5 } from '../components/Quiz5';

import { NotFoundPage } from "./NotFoundPage";
import { Header } from "../components/Header/Header";
import { QuizPageStyles } from "./QuizPage.styled";

export const QuizPage = ({ currentLocale, setCurrentLocale }) => {
  const [showLoading, setShowLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { id } = useParams();

   useEffect(() => {
    const calculatedProgress = (parseInt(id) / 6.0) * 100;
    setProgress(calculatedProgress);
  }, [id]);

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
    <QuizPageStyles>
      {showLoading && <Header progress={progress} activeId={id}/>}

      <Fragment >
        {quizContent}
      </Fragment>
      
    </QuizPageStyles>
  )
}

QuizPage.propTypes = {
  currentLocale: PropTypes.string,
  setCurrentLocale: PropTypes.func.isRequired
};
