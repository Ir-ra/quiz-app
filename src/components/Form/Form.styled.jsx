import styled from "styled-components";

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
/* min-height: 80vh;  */
  /* justify-content: center; */
  box-sizing: border-box;

`;

export const InputContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const InputStyles = styled.input`

  display: flex;
  padding-bottom: 9px;
  margin: 56px 0;
  line-height: 130%;
  background: var(--purple);
  padding: 20px;
  border-radius: 16px;
  /* border: 2px solid var(--purple); */
  border: 2px solid ${props => props.error ? 'var(--pink)' : 'var(--purple)'};

  &::placeholder {
    font-family: "Albert Sans";
    font-size: 17px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: -0.17px;
    color: #C4C8CC80;
    }

    /* &:active {
      border-color: #75ef18;
    } */

    &:focus {
      border-color: none;
    }
`;

export const Status = styled.p`
position: absolute;
    top: 132px;
    left: 30px;
    color: red;
`;
