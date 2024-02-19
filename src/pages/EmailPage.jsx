import { FormattedMessage } from "react-intl";
import { Form } from "../components/Form/Form";

export const EmailPage = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <FormattedMessage id="email" />
        <br></br>
        <FormattedMessage id="email_subtext" />

        <Form />
      </div>
    </>
  )
}
