/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { FaArrowLeft, FaFilePdf, FaFileExcel, FaFileAlt } from "react-icons/fa";
import { MdInsertDriveFile } from "react-icons/md";

const PreviewImage = (props) => {
  const { src, onDeleteImage, file, color } = props;
  const ext = file.name.split(".").pop();
  const fileName = file.name
  const bgPreview = {
    background: "#4f4f4f",
  };
  const renderFile = () => {
    switch (ext) {
      case "pdf":
        return (
          <div className='flex items-center justify-center h-screen bg-black'>
            <div className='py-4 w-full' style={bgPreview}>
              <FaFilePdf className='mx-auto text-4xl mt-4' style={{ color }} />
              <p className='text-center font-bold text-2xl text-white'>PDF</p>
              <p className='text-center text-sm overflow-hidden text-white'>
                {fileName && fileName.length > 35 ? file.name.substring(0, 35) + "....." + file.name.split(".").pop() : file.name}
              </p>
            </div>
          </div>
        );
      case "docx":
      case "doc":
        return (
          <div className='flex items-center justify-center h-screen bg-black'>
            <div className='py-4 w-full' style={bgPreview}>
              <MdInsertDriveFile
                className='mx-auto text-4xl mt-4'
                style={{ color }}
              />
              <p className='text-center font-bold text-2xl text-white'>Doc</p>
              <p className='text-center text-sm  overflow-hidden text-white'>
                {fileName && fileName.length > 35 ? file.name.substring(0, 35) + "....." + file.name.split(".").pop() : file.name}
              </p>
            </div>
          </div>
        );
      case "txt":
        return (
          <div className='flex items-center justify-center h-screen bg-black'>
            <div className='py-4 w-full' style={bgPreview}>
              <FaFileAlt className='mx-auto text-4xl mt-4' style={{ color }} />
              <p className='text-center font-bold text-2xl text-white'>Text</p>
              <p className='text-center text-sm overflow-hidden text-white'>
                {fileName && fileName.length > 35 ? file.name.substring(0, 35) + "....." + file.name.split(".").pop() : file.name}
              </p>
            </div>
          </div>
        );
      case "xlsx":
      case "xls":
        return (
          <div className='flex items-center justify-center h-screen bg-black'>
            <div className='py-4 w-full' style={bgPreview}>
              <FaFileExcel
                className='mx-auto text-4xl mt-4'
                style={{ color }}
              />
              <p className='text-center font-bold text-2xl text-white'>Excel</p>
              <p className='text-center text-sm  overflow-hidden text-white'>
                {fileName && fileName.length > 35 ? file.name.substring(0, 35) + "....." + file.name.split(".").pop() : file.name}
              </p>
            </div>
          </div>
        );
      default:
        return (
          <div className='flex items-center justify-center h-screen bg-black'>
            <img src={src} alt='preview-image' className='w-full h-64 ' />
          </div>
        );
    }
  };
  return (
    <div className='bg-black '>
      <div
        className='color-caption flex items-center p-5 absolute top-0 w-full'
        style={bgPreview}>
        <FaArrowLeft
          className='text-white text-base font-bold cursor-pointer'
          onClick={onDeleteImage}
        />
        <p className='text-white font-bold px-2'>Pratinjau File</p>
      </div>
      {renderFile()}
    </div>
  );
};

export default PreviewImage;
