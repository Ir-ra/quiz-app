import { MultiSelectBtnStyles } from "./MultipleButtonSelect.styles";

export const MultipleButtonSelect = ({ label, onChangeHandler, className }) => {
  return (
    <MultiSelectBtnStyles onClick={onChangeHandler} className={className}>
        {label}
    </MultiSelectBtnStyles>)
}

export default MultipleButtonSelect;
