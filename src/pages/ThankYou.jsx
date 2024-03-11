import { useContext } from "react";
import { FormattedMessage } from "react-intl"
import { AnswerContext } from "../context/AnswerContext";
import { useNavigate } from "react-router-dom";
import { generateCVSFile } from "../utils/cvs";

import { Button } from "../components/Button/Button";
import { SubText } from "../components/SubText/SubText";

import checkmark from '../assets/checkmark-144.svg';
import download from '../assets/download.svg';

import {
  CheckMarkStyles,
  DownloadButton,
  TextContainer,
  ThankYouStyles,
  ThanksText
} from "./ThankYou.styled";
import { LOCALES } from "../localization/locales";

export const ThankYou = ({setCurrentLocale}) => {
  const { clearAnswers, clearEmail } = useContext(AnswerContext);
  const { email, answers } = useContext(AnswerContext);
  const navigate = useNavigate();

  const handleRetakeQuiz = () => {
    clearAnswers();
    clearEmail();
    setCurrentLocale(LOCALES.ENGLISH)
    localStorage.setItem("locale", '');
    navigate('/quiz/1');
  };

  const handleDownloadCSV = () => {
    generateCVSFile(email, answers)
  };

  return (
    <main>
      <ThankYouStyles>
        <TextContainer>
          <ThanksText><FormattedMessage id="thanks" /></ThanksText>

          <SubText title={<FormattedMessage id="thanks_sub" />} />
        </TextContainer>

        <CheckMarkStyles src={checkmark} alt="" />

        <DownloadButton onClick={handleDownloadCSV}>
          <img src={download} alt="download icon" />

          <SubText title={<FormattedMessage id="thanks_load" />} />
        </DownloadButton>
      </ThankYouStyles>

      <Button
        buttonType='button'
        title={<FormattedMessage id="thanks_retake" />}
        onClick={handleRetakeQuiz}
      />
    </main>
  )
}
