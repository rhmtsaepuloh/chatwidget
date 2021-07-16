import React from "react";

import "../styles/Onboarding.scss";
const blackLogo = require("../assets/ChatAja.png");
const birdLogo = require("../assets/birdNotFound.png");

const PrivateNotFound = () => {
  return (
    <div className='wrapper-onboarding'>
      <div className='flex flex-col justify-between'>
        <div className='flex items-center justify-between pt-4 pl-4'>
          <p className='text-white text-base font-bold'>ChatAja Widget</p>
        </div>
        <div
          className='flex items-center justify-between border h-64 w-64 rounded-full mx-auto'
          style={{ border: "solid 1px #F3F3F3" }}>
          <div
            className='flex items-center justify-between h-48 w-48 rounded-full mx-auto'
            style={{ background: "#F3F3F3" }}>
            <img
              alt='logo'
              src={birdLogo}
              className='h-48 w-48 rounded-full mx-auto'
            />
          </div>
        </div>
        <div className='text-center px-10'>
          <p className='text-2xl my-2 font-bold' style={{ color: "#4F4F4F" }}>
            Oops..
          </p>
        </div>
        <div className='text-center'>
          <p className='text-sm' style={{ color: "#979797" }}>
          Sepertinya kami tidak dapat menampilkan halaman yang Anda tuju.
            Mohon tidak menggunakan{" "}
            <span className='text-gray-600 font-bold'>private mode</span> pada
            browser Anda
          </p>
        </div>
      </div>
      <div
        className='flex items-center justify-center mt-8 inset-x-0 absolute bg-white'
        style={{ bottom: "0px", padding: "10px 0px" }}>
        <img src={blackLogo} alt='icon' className='h-3 w-3 mr-1' />
        <p className='text-xs text-center text-gray-500 box-border'>
          Powered by ChatAja
        </p>
      </div>
    </div>
  );
};

export default PrivateNotFound;
