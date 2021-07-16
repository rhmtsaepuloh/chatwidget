import React from "react";

const RenderArrow = ({ onClick, children }) => {
  return (
    <button
      className='h-12 w-12 rounded-full flex items-center justify-center'
      onClick={onClick}
      style={{ background: "rgba(0, 0, 0, 0.2)" }}>
      {children}
    </button>
  );
};

export default RenderArrow;
