import styled from "styled-components";

export const TopicIcon = styled.img`
  width: 30px;
  height: 30px;
  background-position: center;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TopicItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 10px;
`;

export const TopicText = styled.p`
  color: #FFF;

text-align: center;
font-family: "Nunito Sans";
font-size: 13px;
font-style: normal;
font-weight: 600;
line-height: 16px; /* 123.077% */
letter-spacing: 0.078px;
`;