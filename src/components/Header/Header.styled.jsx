import styled from 'styled-components';

export const HeaderStyles = styled.div`
  font-family: "Albert Sans", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const IdLine = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  font-weight: 800;
  line-height: 20px;
`;

export const BtnBlock = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Id = styled.p`
  margin: auto;
`;

export const CurrentId = styled.span`
  color: var(--pink);
`;
