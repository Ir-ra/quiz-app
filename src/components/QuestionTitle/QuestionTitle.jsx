import { TitleSlyles } from "./QuestionTitle.styled";

export const QuestionTitle = ({ title }) => {

  return (
    <TitleSlyles $type={title.props.id}>
      {title}
    </TitleSlyles>
    );
};

