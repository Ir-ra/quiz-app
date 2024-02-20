import styled from "styled-components";

export const MultiSelectBtnStyles = styled.button`
  display: flex;
  margin: auto;
  background-color: var(--purple);
  border: 2px solid transparent;
  border-radius: 16px;
   align-items: center;
  font-weight: 600;
  line-height: 24px;
  position: relative;
  box-sizing: border-box;
  transition: all 0.2s ease-in;

  width: ${props => props.$type === "vertical" ? "100px" : "100%"};
  height: ${props => props.$type === "vertical" ? "100px" : "auto"};
  padding: ${props => props.$type === "vertical" ? "0 8px 8px" : "21px 20px"};

  ${(props) => props.$type === "vertical" && `
    border-radius: 50%;
  `}
  border: ${props =>
    props.className === 'selected' || props.className === 'bubbl' ? '2px solid var(--pink)' : '2px solid transparent'};
`;
