import { isEmpty } from "lodash";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { IoIosAttach } from "react-icons/io";
import { useSelector } from "react-redux";

import "../styles/File.scss";

const SendFile = ({ onGoBack, onChangeFile }) => {
  const { primaryColor, primaryTextColor } = useSelector(
    (state) => state.clientReducers.dataClient
  );
  return (
    <div>
      <div
        className='header flex items-center'
        style={{
          background: isEmpty(primaryColor) ? "#fa565d" : primaryColor,
        }}>
        <FiArrowLeft
          className='arrow-icon text-white text-base font-bold cursor-pointer text-2xl mr-3'
          onClick={onGoBack}
        />
        <div>
          <p className='text-xl font-bold' style={{ color: primaryTextColor }}>
            Kirim File
          </p>
        </div>
      </div>
      <div className='flex items-center justify-center h-screen px-3'>
        <div>
          <IoIosAttach className='text-gray-400 cursor-pointer text-6xl transform rotate-45 mx-auto mb-5' />
          <p className='text-xl text-center font-bold mb-2'>Kirim File</p>
          <p className='text-center mb-3'>
            Anda dapat mengirim file gambar (png, jpg, jpeg, gif) atau dokumen
            (doc, docx, pdf, xls, xlsx, txt) dengan ukuran maksimal 5MB
          </p>
          <div className='image-upload cursor-pointer mx-auto'>
            <label htmlFor='file-input'>
              <div className='bg-blue-600 p-2 mx-auto text-white w-1/2 text-center cursor-pointer hover:bg-blue-400 rounded'>
                UNGGAH FILE
              </div>
            </label>
            <input
              id='file-input'
              type='file'
              accept='*.*'
              onChange={onChangeFile}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendFile;
