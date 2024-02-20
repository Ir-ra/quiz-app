import { MultiSelectBtnStyles } from "./MultipleButtonSelect.styles";

export const MultipleButtonSelect = ({ label, onChangeHandler, className, type }) => {
  console.log('className', className);
  return (
    <MultiSelectBtnStyles 
    onClick={onChangeHandler} 
    className={className} 
    $type={type}>
        {label}
    </MultiSelectBtnStyles>)
}

export default MultipleButtonSelect;
