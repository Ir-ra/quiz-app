import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  position: relative;
  margin: auto;
  width: 252px;
  height: 252px;
  text-align: center;
  background: var(--background-main);
`;

export const Circular = styled.svg`
  height: 252px;
  width: 252px;
  margin: 0 auto;
`;

export const Path = styled.circle`
  stroke-dasharray: 1, 100;
  stroke-dashoffset: 0;
  transition: stroke-dasharray 0.5s ease 0s, stroke 0.5s ease;
`;

export const LoaderText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: "Albert Sans";
  font-size: 52px;
  font-weight: 800;
  letter-spacing: -1.04px;
  color: var(--white);
`;
