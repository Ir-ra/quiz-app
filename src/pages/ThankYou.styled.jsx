import styled from "styled-components";

export const ThankYouStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  gap: 60px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CheckMarkStyles = styled.img`
  width: 118px;
  height: 118px;
`;

export const DownloadButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;

export const ThanksText = styled.p`
  font-family: "Niconne", cursive;
  font-size: 36px;
  font-weight: 400;
  text-align: center;
  color: var(--textColor);
`;
