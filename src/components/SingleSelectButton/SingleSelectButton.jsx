import PropTypes from 'prop-types';
import { SelectStyles, Selectlink } from "./SingleSelectButton.styled";

export const SingleSelectButton = ({
  item,
  route,
  onClickHandler,
  type
}) => {

  return (
    <SelectStyles $type={type}>
      <Selectlink
        to={route}
        onClick={() => onClickHandler(item)}
      >
        {item}
      </Selectlink>
    </SelectStyles>
  )
}

SingleSelectButton.propTypes = {
  item: PropTypes.any,
  route: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};