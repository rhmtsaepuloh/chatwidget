import React from "react";
import { FaTimes } from "react-icons/fa";
import { IoIosAttach } from "react-icons/io";
import { MdTagFaces } from "react-icons/md";
import TextareaAutosize from "react-autosize-textarea";

import "../styles/Chat.scss";

const Input = ({
  onChange,
  value,
  onClick,
  displayEmoji,
  onCloseEmoji,
  onChangeFile,
  urlImagePreview,
  onKeyPress,
  isDisabled,
}) => {
  const imageLength = urlImagePreview.length > 0;
  const RenderSend = () => {
    if (imageLength || value.length > 0) {
      return (
        <input
          className={`${
            imageLength
              ? "color-caption text-white ml-12"
              : "color-grey text-blue-600"
          } cursor-pointer text-sm font-bold float-right mt-1 mx-1`}
          type='submit'
          value='KIRIM'
        />
      );
    }
  };
  const RenderUtilities = () => {
    if (displayEmoji) {
      return (
        <div className='flex items-center bg-white p-1 rounded-full shadow-md w-6 h-6'>
          <FaTimes
            className='text-red-600 cursor-pointer'
            onClick={onCloseEmoji}
          />
        </div>
      );
    } else {
      return (
        <MdTagFaces
          className={`mr-1 cursor-pointer text-2xl ${
            imageLength ? "text-white" : "text-gray-600 "
          }`}
          onClick={isDisabled ? null : onClick}
        />
      );
    }
  };
  return (
    <div
      className={`${
        imageLength && "bg-basic-caption"
      } fixed bottom-0 z-10 container`}
      style={{ overflow: "hidden" }}>
      <div
        className={` flex items-end p-2 w-full ${
          imageLength ? "color-caption" : "color-grey"
        }`}
        style={{ borderRadius: 20 }}>
        <div className='w-1/6'>{RenderUtilities()}</div>
        <TextareaAutosize
          className={`${imageLength && "caption"} textarea w-4/6 -ml-5`}
          placeholder={
            imageLength ? "Tambahkan caption..." : "Ketik pesan disini..."
          }
          onChange={onChange}
          value={value}
          onKeyPress={onKeyPress}
          disabled={isDisabled}
        />
        <div className='flex items-center'>
          <IoIosAttach
            className={
              imageLength
                ? "hidden"
                : `text-gray-600 cursor-pointer text-2xl transform rotate-45 ${
                    value.length > 0 ? "ml-0" : "ml-12"
                  }`
            }
            onClick={isDisabled ? null : onChangeFile}
          />
          {RenderSend()}
        </div>
      </div>
    </div>
  );
};

export default Input;
