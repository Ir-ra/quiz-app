import { ProgressContainer, ProgressLine } from "./ProgressBar.styled";

export const ProgressBar = ({ progress }) => {

  return (
    <ProgressContainer>
      <ProgressLine
        className="lineLoader"
        style={{ width: `${progress}%` }}
      />
    </ProgressContainer>
  );
}
