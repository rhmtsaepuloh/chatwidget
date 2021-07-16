import React from "react";
import { MdSchedule } from "react-icons/md";

const ButtonMessagesProgress = ({ message, timestamp, item, onPostBack }) => {
  return (
    <React.Fragment>
      <p className='m-1 whitespace-pre-wrap break-words'>{message}</p>
      {item.payload.buttons.map((el, i) => {
        if (el.type === "link") {
          return (
            <div
              className='w-full bg-blue-300 p-2 cursor-pointer text-center m-0'
              style={{ maxWidth: "95%", margin: "5px 8px" }}
              key={i}>
              <a
                href={el.payload.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-700 text-center mx-auto'>
                {el.label}
              </a>
            </div>
          );
        } else {
          return (
            <div
              className='w-full bg-blue-300 p-2 cursor-pointer text-center m-0 text-blue-700'
              style={{ maxWidth: "95%", margin: "5px 8px" }}
              onClick={() => onPostBack(el.label, el.payload)}
              key={i}>
              {el.label}
            </div>
          );
        }
      })}
      <div className='file-timestamp flex items-center justify-end'>
        <p className='text-sm' style={{ color: "#979797" }}>
          {timestamp}
        </p>
        <MdSchedule className='ml-1' />
      </div>
    </React.Fragment>
  );
};

export default ButtonMessagesProgress;
