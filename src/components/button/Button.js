import React from 'react';
import './button.css';

function Button({ children, onClick, fontSize, buttonSize}) {

    const buttonSizes = [
        'btn-xl',
        'btn-md',
        'btn-sm'
    ];

    const fontSizes = [
        'font-xl',
        'font-md',
        'font-sm'
    ];

    const checkButtonSize = buttonSizes.includes(buttonSize) ? buttonSize : buttonSizes[0];

    const checkFontSize = fontSizes.includes(fontSize) ? fontSize : fontSizes[0];

  return (
    <button className={`btn ${checkButtonSize} ${checkFontSize}`} onClick={onClick}>
        {children}
    </button>
  );
}

export default Button;
