import { useContext, useState } from "react";
import { FormattedMessage } from "react-intl";
import { AnswerContext } from "../context/AnswerContext";
import { useNavigate } from "react-router-dom";

import { Form } from "../components/Form/Form";
import { QuestionTitle } from "../components/QuestionTitle/QuestionTitle";
import { SubText } from "../components/SubText/SubText";
import { Button } from "../components/Button/Button";

import { EmailStyles } from "./EmailPage.styles";

export const EmailPage = () => {
  const [emailValue, setEmailValue] = useState('');
  const [validationStatus, setValidationStatus] = useState('');

  const { saveEmailToLocalStorage } = useContext(AnswerContext);
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    saveEmailToLocalStorage(emailValue);
    navigate('/result');
  };
  
  return (
    <main>
      <EmailStyles>
        <QuestionTitle title={<FormattedMessage id="email" />} />
        <SubText title={<FormattedMessage id="email_subtext" />} />

        <Form
          emailValue={emailValue}
          setEmailValue={setEmailValue}
          validationStatus={validationStatus}
          setValidationStatus={setValidationStatus}
        />
      </EmailStyles>

      <Button
        buttonType='submit'
        title={'Next'}
        onClick={handleNextButtonClick}
        styles={validationStatus !== 'OK' ? 'outline' : ''}
        disabled={validationStatus !== 'OK'}
      />
    </main>
  )
}
