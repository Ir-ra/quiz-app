import { NavLink } from "react-router-dom";
import usePagePath from "../hooks/usePagePath";
import { useContext, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { AnswerContext } from "../context/AnswerContext";

export const Quiz4 = () => {
  const { route, id } = usePagePath();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const intl = useIntl();
  const {saveAnswerToLocalStorage} = useContext(AnswerContext)

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
  }

  const hateBooks = [intl.messages[`q_4_opt1`], intl.messages[`q_4_opt2`], intl.messages[`q_4_opt3`], intl.messages[`q_4_opt4`]]


  return (
    <div>
      <FormattedMessage id="question4" />

      <div style={{display: 'flex', flexDirection: 'column'}}>
       
        {hateBooks.map((book, i) => (
          <div key={book}>
            <label>
              {intl.messages[`q_4_opt${i+1}`]}
              <input
                type="checkbox"
                value={book.toString()}
                checked={selectedOptions.includes(book.toString())}
                onChange={handleCheckboxChange}
              />
            </label>
          </div>
        ))}

        <NavLink
          to={route}
          onClick={handleNextButtonClick}
        >
          next
        </NavLink>
      </div>
    </div>
  )
}