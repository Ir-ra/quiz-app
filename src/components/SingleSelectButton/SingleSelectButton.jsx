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
