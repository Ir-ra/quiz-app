import arrow from '../../assets/arrowLeft.svg';
import { BackBtnStyles } from './GoBackButton.styled';
export const GoBackButton = () => {
  return (
    <BackBtnStyles
      type="button"
      onClick={() => window.history.back()}
    >
      <img src={arrow} alt="arrow" />
    </BackBtnStyles>
  )
}
