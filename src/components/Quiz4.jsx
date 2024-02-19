import { NavLink, useNavigate } from "react-router-dom";
import usePagePath from "../hooks/usePagePath";
import { useContext, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { AnswerContext } from "../context/AnswerContext";
import { MultipleButtonSelect } from "./MultipleButtonSelect";
import { Button } from "./Button/Button";

export const Quiz4 = () => {
  const { route, id } = usePagePath();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { saveAnswerToLocalStorage } = useContext(AnswerContext);
  const intl = useIntl();
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter(option => option !== value));
    }
  };

  const handleNextButtonClick = () => {
    saveAnswerToLocalStorage(id, selectedOptions, 'multiple-select');
    navigate(route)
  }

  const hatedItems = [
    intl.messages[`q_4_opt1`],
    intl.messages[`q_4_opt2`],
    intl.messages[`q_4_opt3`],
    intl.messages[`q_4_opt4`]
  ]

  return (
    <div>
      <FormattedMessage id="question4" />

      <div style={{ display: 'flex', flexDirection: 'column' }}>

        {hatedItems.map((item, i) => (
          <div key={item}>
            <MultipleButtonSelect
              item={item.toString()}
              label={
                <>
                  {intl.messages[`q_4_opt${i + 1}`]}
                  <input
                    type="checkbox"
                    value={item.toString()}
                    checked={selectedOptions.includes(item.toString())}
                    onChange={handleCheckboxChange}
                  />
                </>
              }
              onChangeHandler={handleCheckboxChange}
              className={selectedOptions.includes(intl.messages[`q_4_opt${i + 1}`]) ? 'selected' : ''}
              displayAsCheckbox={true}
            />
          </div>
        ))}


        <Button
          buttonType='button'
          title={'Next'}
          onClick={handleNextButtonClick}
        />
      </div>
    </div>
  )
}
