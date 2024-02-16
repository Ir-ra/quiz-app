import { NavLink } from "react-router-dom";
import usePagePath from "../hooks/usePagePath";

export const Quiz4 = () => {
  const { route, id } = usePagePath();

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