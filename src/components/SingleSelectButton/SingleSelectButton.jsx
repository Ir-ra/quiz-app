import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

export const SingleSelectButton = ({
  item,
  route,
  onClickHandler,
  // iconContent,

  // genders
}) => {

  console.log();

  return (
    <>
      <NavLink
        to={route}
        onClick={() => onClickHandler(item)}
      >
        {/* {genders && genders.includes(item) && (
          iconContent
        )} */}

        {item}
      </NavLink>

    </>
  )
}

SingleSelectButton.propTypes = {
  item: PropTypes.any,
  route: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
 
};