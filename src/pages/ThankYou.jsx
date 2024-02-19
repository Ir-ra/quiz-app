import { useContext } from "react";
import { FormattedMessage } from "react-intl"
import { AnswerContext } from "../context/AnswerContext";
import { useNavigate } from "react-router-dom";
import { generateCVSFile } from "../utils/cvs";
import { Button } from "../components/Button/Button";
import checkmark from '../assets/checkmark-144.svg';
import { SubText } from "../components/SubText/SubText";

export const ThankYou = () => {
  const { clearAnswers, clearEmail } = useContext(AnswerContext);
  const navigate = useNavigate();

  const handleRetakeQuiz = () => {
    clearAnswers();
    clearEmail();
    localStorage.setItem("locale", '');
    navigate('/quiz/1');
  };

  const { email, answers } = useContext(AnswerContext);

  const handleDownloadCSV = () => {
    generateCVSFile(email, answers)
  }
  return (
    <>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p id="thank"><FormattedMessage id="thanks" /></p>
          <br></br>
          
          <SubText title={<FormattedMessage id="thanks_sub" />}/>
          
          <img src={checkmark} alt="" />
          <button onClick={handleDownloadCSV}>
            <SubText title={<FormattedMessage id="thanks_load" />}/>
          </button>
          
          <Button
            buttonType='button'
            title={<FormattedMessage id="thanks_retake" />}
            onClick={handleRetakeQuiz}
          />
        </div>
    </>
  )
}