import { FormattedMessage } from "react-intl";
import { Form } from "../components/Form/Form";
import { QuestionTitle } from "../components/QuestionTitle/QuestionTitle";
import { SubText } from "../components/SubText/SubText";
import { Button } from "../components/Button/Button";

export const EmailPage = () => {
  return (
    <div>
      <QuestionTitle title={<FormattedMessage id="email" />} />
      <SubText title={<FormattedMessage id="email_subtext" />} />
      <Form />
      {/* <Button
          buttonType='submit'
          title={'Next'}
          // onClick={handleNextButtonClick}
          // styles={validationStatus !== 'OK' ? 'outline' : ''}
          // disabled={validationStatus !== 'OK'}
        /> */}
    </div>
  )
}
