import React from "react";
import { MdFileDownload, MdDoneAll } from "react-icons/md";
import { formatBytes, capitalize } from "../utils/memory";

const RenderDocument = ({
  icon,
  text,
  extension,
  splitExtension,
  size,
  timestamp,
  downloadFile,
  caption,
}) => {
  return (
    <React.Fragment>
      <div className='file-document flex items-center justify-between bg-blue-200 w-full rounded px-1 py-3'>
        <div className='flex items-center  w-3/4'>
          {icon}
          <p className='whitespace-pre-wrap break-words ml-2 w-3/4 text-xs'>
            {text}
          </p>
        </div>
        <MdFileDownload
          onClick={() => downloadFile(extension, text)}
          className='text-blue-700 text-xl cursor-pointer'
        />
      </div>
      <p className='whitespace-pre-wrap break-words mb-3'>{caption}</p>
      <div className='file-timestamp flex items-center justify-between'>
        <p className='text-sm' style={{ color: "#979797" }}>
          {capitalize(splitExtension)}
          <label className='mx-1'>&bull;</label>
          {formatBytes(size)}
        </p>
        <div className='flex justify-end'>
          <p className='text-sm' style={{ color: "#979797" }}>
            {timestamp}
          </p>
          <MdDoneAll className='ml-1' />
        </div>
      </div>
    </React.Fragment>
  );
};

export default RenderDocument;
