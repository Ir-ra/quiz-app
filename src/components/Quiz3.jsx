import { NavLink } from "react-router-dom"
import usePagePath from "../hooks/usePagePath";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const Quiz3 = () => {
  const { route, id } = usePagePath();
  const [answers] = useLocalStorage('quizAnswers', {});
  console.log(answers)

  return (
    <div>
     
     {id}

      <ul>
        <li>
          <NavLink to={route}>
          {`link to Quiz ${+id + 1}`}
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
