import React from "react";
import { MdArrowForward } from "react-icons/md";

const Button = React.memo(
  ({ buttonText, onClick, icon, background, buttonColor }) => {
    return (
      <div
        className='flex items-center justify-center mx-12 rounded box-border text-center cursor-pointer py-2'
        onClick={onClick}
        style={{ marginBottom: -20, background }}>
        <p className='text-base' style={{ color: buttonColor }}>
          {buttonText}
        </p>
        {icon && <MdArrowForward style={{ color: buttonColor }} className='text-white ml-2' />}
      </div>
    );
  }
);

export default Button;
