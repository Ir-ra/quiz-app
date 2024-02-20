import { useRef } from "react";
import { FormattedMessage } from "react-intl";

import {
  FormAndButtonContainer,
  FormStyles,
  InputContainerStyles,
  InputStyles,
  PolicyText,
  Status
} from './Form.styled';


export const Form = ({ emailValue, setEmailValue, validationStatus, setValidationStatus }) => {
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

  return (
    <FormAndButtonContainer>
      <FormStyles
        action=""
        method="post"
      >
        <div>
          <InputContainerStyles>
            <InputStyles
              type="text"
              name="email"
              value={emailValue}
              placeholder="Your email"
              onChange={handleEmailChange}
              error={validationStatus === 'Error' ? 'true' : undefined}
              autoComplete="off"
            />
          </InputContainerStyles>

          {validationStatus === 'Error' && <Status>Invalid email</Status>}
          {validationStatus === 'OK' && ''}

          <PolicyText>
            <FormattedMessage id="email_policy" />
          </PolicyText>
        </div>
      </FormStyles>
    </FormAndButtonContainer>
  );
}
