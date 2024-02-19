import { useParams } from "react-router-dom";
import { ProgressBar } from "../Loaders/ProgressBar";
import { GoBackButton } from "../GoBackButton/GoBackButton";


export const Header = ({ progress }) => {
  const { id } = useParams();

  return (
    <>
    {id > 1 && (
      <GoBackButton />
    )}

      <p>{`${id}/5`}</p>
      <div style={{ width: '300px' }}>
        <ProgressBar progress={progress} />
      </div>
    </>
  )
}
