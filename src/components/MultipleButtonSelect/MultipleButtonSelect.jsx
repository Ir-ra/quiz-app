import { Label } from "./MultipleButtonSelect.styles";

export const MultipleButtonSelect = ({ label, onChangeHandler, className }) => {
  return (
    <Label>
      <div
        className={className}
        onClick={onChangeHandler}
      >
        {label}
      </div>
    </Label>)
}

export default MultipleButtonSelect;
