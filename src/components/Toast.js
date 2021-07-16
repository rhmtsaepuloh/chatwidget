import React from "react";

const Toast = ({ text, display }) => {
  return (
    <div
      className='footer-chatroom absolute mx-auto items-center justify-center'
      style={{
        bottom: "100px",
        display: display ? "flex" : "none",
        zIndex: 2,
      }}>
      <div className='bg-red-400 rounded-full py-2 px-8 '>
        <p className='text-center text-white'>{text}</p>
      </div>
    </div>
  );
};

export default Toast;
