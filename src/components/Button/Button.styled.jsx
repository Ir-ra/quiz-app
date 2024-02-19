import styled from "styled-components";

export const MainBtnStyles = styled.button`
  height: 56px;
  padding: 16px 100px;
  border-radius: 1000px;
  text-align: center;
  font-family: "Albert Sans";

  font-weight: 800;
  line-height: 1.4;
  letter-spacing: -0.17px;

  color: var(--white);
  cursor: pointer;
  /* margin-top: auto; */


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