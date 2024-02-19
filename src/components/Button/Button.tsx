import React from 'react';

export const Button = ({ title, onClick, buttonType }) => {
  return (
    <button
      type={buttonType}
      className=''
      onClick={onClick}
    >
      {title}
    </button>
  );
};
