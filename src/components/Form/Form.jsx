import { useContext, useRef, useState } from "react";
import { Button } from "../Button/Button"
import { AnswerContext } from "../../context/AnswerContext";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import {FormStyles, InputContainerStyles, InputStyles, Status} from './Form.styled';

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
    <div className="forma">
      <FormStyles
        action=""
        method="post"
      >
        <InputContainerStyles>
          <InputStyles
            type="text"
            name="email"
            value={emailValue}
            placeholder="Your email"
            onChange={handleEmailChange}
            error={validationStatus === 'Error'}
            autoComplete="off"
          />
        </InputContainerStyles>
        {/* {validationStatus === 'Validation' && <Status>Validation</Status>} */}
        {validationStatus === 'Error' && <Status>Invalid email</Status>}
        {validationStatus === 'OK' && ''}
        {/* {validationStatus === '' && emailValue.trim() !== '' && <Status>Validation</Status>} */}
        <p>
          <FormattedMessage id="email_policy" />
        </p>
        <Button
          buttonType='submit'
          title={'Next'}
          onClick={handleNextButtonClick}
          styles={validationStatus !== 'OK' ? 'outline' : ''}
          disabled={validationStatus !== 'OK'}
        />
      </FormStyles>
    </div>
  );
}