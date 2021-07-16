import React from "react";

import "../styles/Loading.scss";

const Loading = ({ display }) => {
  return (
    <div
      id='myModal'
      className='modal'
      style={{ display: display ? "block" : "none", borderRadius: "20px" }}>
      <div className='flex items-center h-full'>
        <div className='bg-white w-32 mx-auto px-4 rounded py-4'>
          <div className='lds-ring mx-auto'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className='text-center text-sm'>Memuat...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
