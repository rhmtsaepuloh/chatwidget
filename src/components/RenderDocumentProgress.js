import React from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { MdSchedule } from "react-icons/md";

const RenderDocumentProgress = ({
  icon,
  text,
  progressUpload,
  timestamp,
  cancelUpload,
  caption,
}) => {
  return (
    <React.Fragment>
      <div className='file-document flex items-center justify-between bg-blue-200 w-full rounded px-1 py-3'>
        <div className='flex items-center justify-start w-1/2'>
          {icon}
          <p className='whitespace-pre-wrap break-words ml-2 w-3/4 text-xs'>
            {text}
          </p>
        </div>
        <div className='flex items-center justify-end'>
          <p className='text-blue-600 text-sm font-bold mr-1'>
            {progressUpload}%
          </p>
          <FaRegTimesCircle
            className='cursor-pointer'
            onClick={() => cancelUpload()}
          />
        </div>
      </div>
      <p className='whitespace-pre-wrap break-words mb-3'>{caption}</p>
      <div className='file-timestamp flex items-center justify-end'>
        <p className='text-sm' style={{ color: "#979797" }}>
          {timestamp}
        </p>
        <MdSchedule className='ml-1' />
      </div>
    </React.Fragment>
  );
};

export default RenderDocumentProgress;
