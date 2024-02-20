import { useParams } from "react-router-dom";
import { ProgressBar } from "../Loaders/ProgressBar";
import { GoBackButton } from "../GoBackButton/GoBackButton";

import { BtnBlock, HeaderStyles, Id, IdLine, CurrentId } from "./Header.styled";


export const Header = ({ progress }) => {
  const { id } = useParams();

  return (
    <HeaderStyles>
      <IdLine>
        <BtnBlock>
          {id > 2 && <GoBackButton />}
        </BtnBlock>

        <Id>
          <CurrentId>{id}</CurrentId>
          <span> / 5</span>
        </Id>
      </IdLine>

      <ProgressBar progress={progress} />
    </HeaderStyles>
  );
};
