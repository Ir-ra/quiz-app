import { SubTextSlyles } from "./SubText.styled";

export const SubText = ({ title }) => {
  {
    return (
      <SubTextSlyles $type={title.props.id}>
        {title}
      </SubTextSlyles>
    );
  }
}