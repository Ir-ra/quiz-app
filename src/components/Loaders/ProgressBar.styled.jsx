import styled from 'styled-components';

export const ProgressContainer = styled.div`
  width: 100%;
  height: 4px;
  border: none;
  overflow: hidden;
  background-color: var(--loaderLine);
  border-radius: 100px;
`;

export const ProgressLine = styled.div`
  height: 100%;
  background-color: var(--pink);
  transition: width 0.5s ease-in-out;
  border-radius: 100px;
`;