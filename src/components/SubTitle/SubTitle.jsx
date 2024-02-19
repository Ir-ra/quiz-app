import { SubTitleSlyles } from "./SubTitle.styled";

export const SubTitle = ({ title }) => {

    return (
      <SubTitleSlyles $type={title.props.id}>
        {title}
      </SubTitleSlyles>
    );
};

