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
  line-height: 1.23;
  letter-spacing: 0.078px;
`;

export const CirleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const QuestionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BubbleSelectStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  gap: 10px;
  padding: 24px 0 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 30px 0 0;
  }

`;
