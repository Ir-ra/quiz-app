import { useContext } from "react";
import { FormattedMessage } from "react-intl"
import { AnswerContext } from "../context/AnswerContext";
import { useNavigate } from "react-router-dom";
import { generateCVSFile} from "../utils/cvs";

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
  console.log('email', email)
  console.log('answers', answers)

  const handleDownloadCSV = () => {
    generateCVSFile(email, answers)
  }
  return (
    <>
      <p>
        <FormattedMessage id="thanks" />
        <br></br>
        <FormattedMessage id="thanks_sub" />
        check


        <button onClick={handleDownloadCSV}>
          <FormattedMessage id="thanks_load" />
        </button>

        <button onClick={handleRetakeQuiz}>
          <FormattedMessage id="thanks_retake" />
        </button>
      </p>
    </>
  )
}