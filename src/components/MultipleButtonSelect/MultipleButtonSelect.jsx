export const MultipleButtonSelect = ({ label, onChangeHandler, className }) => {
  return (
    <div>
      <label
        className={className}
        onClick={onChangeHandler}
      >
        {label}
      </label>
    </div>)
}

export default MultipleButtonSelect;
