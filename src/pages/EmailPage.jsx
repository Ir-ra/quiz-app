import { FormattedMessage } from "react-intl";
import { Form } from "../components/Form/Form";
import { QuestionTitle } from "../components/QuestionTitle/QuestionTitle";
import { SubText } from "../components/SubText/SubText";

export const EmailPage = () => {
  return (
    <div>
      <QuestionTitle title={<FormattedMessage id="email" />} />
      <SubText title={<FormattedMessage id="email_subtext" />} />
      <Form />
    </div>
  )
}
