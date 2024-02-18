import { useContext, useState } from "react"
import { FormattedMessage } from "react-intl"
import { NavLink } from "react-router-dom"
import { AnswerContext } from "../context/AnswerContext";

export const EmailPage = () => {
  const [emailValue, setEmailValue] = useState('');
  const { saveEmailToLocalStorage } = useContext(AnswerContext);

  const handelrNextButtonNAVLink = () => {
    saveEmailToLocalStorage(emailValue)
   };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <FormattedMessage id="email" />
        <br></br>
        <FormattedMessage id="email_subtext" />

        <form
          action=""
          method="post"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <input
            type="text"
            name=""
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />

          <FormattedMessage id="email_policy" />

          <button type="submit" onClick={handelrNextButtonNAVLink}>
            <NavLink to='/result'>
              next with navLink
            </NavLink>
          </button>
        </form>

      </div>
    </>

  )
}
