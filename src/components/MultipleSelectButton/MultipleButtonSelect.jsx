import { MultiStylesSelectBtn } from "./MultipleButtonSelect.styles";

export const MultipleButtonSelect = ({ label, onChangeHandler, className, type }) => {

  return (
    <MultiStylesSelectBtn
      onClick={onChangeHandler}
      className={className}
      $type={type}>
      {label}
    </MultiStylesSelectBtn>)
}

export default MultipleButtonSelect;
