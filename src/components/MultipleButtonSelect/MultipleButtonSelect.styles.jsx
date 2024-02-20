import styled from "styled-components";

export const MultiSelectBtnStyles = styled.button`
  display: flex;
  margin: auto;
  background-color: var(--purple);
  width: 100%;
  border: 2px solid transparent;
  border-radius: 16px;
  padding: 21px 20px;
  align-items: center;
  font-weight: 600;
  line-height: 24px;
  position: relative;
  box-sizing: border-box;
  transition: all 0.2s ease-in;

  &.selected {
    border: 2px solid var(--pink);
  }
`;
