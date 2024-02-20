import { useNavigate } from "react-router-dom";
import usePagePath from "../../hooks/usePagePath";
import { Fragment, useContext, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { AnswerContext } from "../../context/AnswerContext";

import { MultipleButtonSelect } from "../MultipleSelectButton/MultipleButtonSelect";
import { Button } from "../Button/Button";
import { QuestionTitle } from "../QuestionTitle/QuestionTitle";

import {  ItemInput, ItemLabel, HorizontalSelect } from "./Quiz4.styled";

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
    navigate(route);
  }

  const hatedItems = [
    intl.messages[`q_4_opt1`],
    intl.messages[`q_4_opt2`],
    intl.messages[`q_4_opt3`],
    intl.messages[`q_4_opt4`]
  ]

  return (
    <>
      <QuestionTitle title={<FormattedMessage id="question4" />} />

      <HorizontalSelect>
        {hatedItems.map((item, i) => (
          <Fragment key={item}>
            <MultipleButtonSelect
              item={item.toString()}
              label={
                <>
                    <ItemInput
                      type="checkbox"
                      value={item.toString()}
                      checked={selectedOptions.includes(item.toString())}
                      onChange={handleCheckboxChange}
                      id={`myCheckbox${i}`}
                    />

                  <ItemLabel
                    htmlFor={`myCheckbox${i}`}
                    checked={selectedOptions.includes(item.toString())}
                  >
                    {intl.messages[`q_4_opt${i + 1}`]}
                  </ItemLabel>
                </>
              }
              className={selectedOptions.includes(intl.messages[`q_4_opt${i + 1}`]) ? 'selected' : ''}
              type='selected'
            />
          </Fragment>
        ))}
      </HorizontalSelect>

      <Button
        buttonType='button'
        title={'Next'}
        onClick={handleNextButtonClick}
        styles={selectedOptions.length === 0 ? 'outline' : ''}
        disabled={selectedOptions.length === 0}
      />
    </>
  );
};
