import styled from 'styled-components';

export const ItemComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemLabel = styled.label`
  margin-right: auto;
  position: relative;

  &::before {
    content: "\u2714";
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border: 1px solid #cb4c4c;
    margin-right: 20px;
    background-color: var(--pink);
    border-radius: 8px;
    color: ${({ checked }) => (checked ? '#fafafa' : 'transparent')};
  }
`;

export const ItemInput = styled.input`
  position: absolute;
  right: 0;
  top: 27px;
  opacity: 0;
`;

export const CheckboxWrapper = styled.div`
  position: relative;
`;