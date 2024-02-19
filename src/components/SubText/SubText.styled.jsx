import styled from "styled-components";

export const SubTextSlyles = styled.p`
  font-family: "Albert Sans";
  font-size: 17px;
  font-weight: 600;
  line-height: 1.47;
  letter-spacing: -0.17px;
  color: var(--textColor);

  text-align: center;

  ${(props) => props.$type === "email_subtext" && `
    font-size: 15px;
    font-weight: 500;
    line-height: 1.46;
  `}
`;
