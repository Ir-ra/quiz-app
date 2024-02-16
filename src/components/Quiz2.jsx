import { NavLink } from "react-router-dom";
import usePagePath from "../hooks/usePagePath";
import { FormattedMessage } from "react-intl";


export const Quiz2 = ({ onSave }) => {
  const { route, id } = usePagePath();
  const genders = ['female', 'male', 'other'];


  return (
    <div>
      {id}
      <p id='question'>
        <FormattedMessage id="question2" />
      </p>

      {genders.map(lang => (
        <div key={lang}>
          <NavLink to={route} onClick={() => onSave(lang)}>
            {lang}
          </NavLink>
        </div>
      ))}
    </div>
  )
}