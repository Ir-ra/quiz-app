import { FormattedMessage } from "react-intl";

import {
  FormAndButtonContainer,
  FormStyles,
  InputContainerStyles,
  InputStyles,
  PolicyText,
  Status
} from './EmailForm.styled';


export const EmailForm = ({ emailValue, setEmailValue, validationStatus, setValidationStatus }) => {
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmailValue(value);

    if (value.trim() === '') {
      setValidationStatus('');
      return;
    }

      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setValidationStatus(isValid ? 'OK' : 'Error');
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
