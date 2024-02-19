import React from 'react';
import { MainBtnStyles } from './Button.styled';

export const Button = ({ title, onClick, buttonType, styles, disabled }) => {
  return (
    <MainBtnStyles
      type={buttonType}
      className=''
      onClick={onClick}
      $btntype={styles}
      disabled={disabled}
    >
      {title}
    </MainBtnStyles>
  );
};
