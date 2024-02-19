import { useContext, useRef, useState } from "react";
import { Button } from "../Button/Button"
import { AnswerContext } from "../../context/AnswerContext";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export const Form = () => {
  const [validationStatus, setValidationStatus] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const { saveEmailToLocalStorage } = useContext(AnswerContext);
  const navigate = useNavigate();

  const timerRef = useRef(null);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmailValue(value);

    clearTimeout(timerRef.current);

    if (value.trim() === '') {
      setValidationStatus('');
      return;
    }

    timerRef.current = setTimeout(() => {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setValidationStatus(isValid ? 'OK' : 'Error');
    }, 1000);
  };

  const handleNextButtonClick = () => {
    saveEmailToLocalStorage(emailValue);
    navigate('/result');
  };

  return (
    <form
      action=""
      method="post"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <input
        type="text"
        name="email"
        value={emailValue}
        placeholder="Email address"
        onChange={handleEmailChange}
      />

      {validationStatus === 'Validation' && <p>Validation</p>}
      {validationStatus === 'Error' && <p>Error</p>}
      {validationStatus === 'OK' && <p>OK</p>}
      {validationStatus === '' && emailValue.trim() !== '' && <p>Validation</p>}

      <FormattedMessage id="email_policy" />

      <Button
        buttonType='submit'
        title={'Next'}
        onClick={handleNextButtonClick}
      />
    </form>
  );
}