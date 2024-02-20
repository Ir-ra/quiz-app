import styled from "styled-components";

export const MainBtnStyles = styled.button`
  display: flex;
  height: 56px;
  padding: 16px 50px;

  border-radius: 1000px;
  color: var(--white);
  margin-top: auto;

  font-family: "Albert Sans";
  font-weight: 800;
  line-height: 1.4;
  text-align: center;
  letter-spacing: -0.17px;

  cursor: pointer;

  background: ${(props) =>
    props.$btntype === "outline" ? "var(--pink); opacity: 0.4;" : "var(--pink)"};

 border: ${(props) =>
    props.$btntype === "outline" ? "1px solid var(--pink)" : "none"};

  transition: all 0.2s ease-in;

  &:hover,
  :focus {
    color: ${(props) =>
    props.$btntype === "outline" ? "var(--white)" : "var(--white)"};

    border: ${(props) =>
    props.$btntype === "outline"
      ? "1px solid pink"
      : "none"};
  }
`;

export const ButtonTextStyles = styled.p`
display: flex;
  margin: auto;
`;