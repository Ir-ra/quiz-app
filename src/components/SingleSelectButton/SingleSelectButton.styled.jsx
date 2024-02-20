import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SelectStyles = styled.button`
  display: flex;
  margin: auto;
  width: 100%;
  border-radius: 16px;
  height: 60px;
  padding: 12px 20px;
  justify-content: space-between;
  align-items: center;

  font-weight: 600;
  line-height: 24px;

  background-color: ${props => props.clicked ? 'red' : 'var(--purple)'};

  ${(props) => props.$type === "vertical" && `
    height: 144px;
    padding: 29.5px 23.5px 32.5px 25.5px;
  `}
`;

export const Selectlink = styled(NavLink)`
  display: inherit;
  align-items: center;
  text-decoration: none;
  width: 100%;
  height: 100%;
`;