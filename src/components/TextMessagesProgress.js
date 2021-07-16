import React from "react";
import { MdSchedule } from "react-icons/md";

const TextMessagesProgress = ({ message, timestamp }) => {
  return (
    <React.Fragment>
      <p className='m-1 whitespace-pre-wrap break-words'>{message}</p>
      <div className='file-timestamp flex items-center justify-end'>
        <p className='text-sm' style={{ color: "#979797" }}>
          {timestamp}
        </p>
        <MdSchedule className='ml-1' />
      </div>
    </React.Fragment>
  );
};

export default TextMessagesProgress;
