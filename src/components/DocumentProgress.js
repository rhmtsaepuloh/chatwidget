/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import {
  FaFilePdf,
  FaFileExcel,
  FaRegTimesCircle,
  FaFileAlt,
} from "react-icons/fa";
import { MdInsertDriveFile } from "react-icons/md";
import RenderDocumentProgress from "./RenderDocumentProgress";

const DocumentProgress = ({
  extension,
  color,
  progressUpload,
  sourceImage,
  timestamp,
  text,
  caption,
  cancelUpload,
}) => {
  const SwitchDocument = () => {
    switch (extension) {
      case "pdf":
        return (
          <RenderDocumentProgress
            text={text}
            progressUpload={progressUpload}
            timestamp={timestamp}
            cancelUpload={cancelUpload}
            caption={caption}
            icon={<FaFilePdf style={{ color }} />}
          />
        );
      case "doc":
      case "docx":
        return (
          <RenderDocumentProgress
            text={text}
            progressUpload={progressUpload}
            timestamp={timestamp}
            cancelUpload={cancelUpload}
            caption={caption}
            icon={<MdInsertDriveFile style={{ color }} />}
          />
        );
      case "txt":
        return (
          <RenderDocumentProgress
            text={text}
            progressUpload={progressUpload}
            timestamp={timestamp}
            cancelUpload={cancelUpload}
            caption={caption}
            icon={<FaFileAlt style={{ color }} />}
          />
        );
      case "xls":
      case "xlsx":
        return (
          <RenderDocumentProgress
            text={text}
            progressUpload={progressUpload}
            timestamp={timestamp}
            cancelUpload={cancelUpload}
            caption={caption}
            icon={<FaFileExcel style={{ color }} />}
          />
        );
      default:
        return (
          <React.Fragment>
            <img
              src={sourceImage}
              alt='image'
              className='h-56 w-full mb-2 rounded-md'
            />
            <div className='file-image flex items-center'>
              <div className='progress bg-white' style={{ width: `${100}%` }}>
                <div
                  className='progress bg-blue-700'
                  style={{ width: `${progressUpload}%` }}></div>
              </div>
              <p className='text-blue-700 text-xs font-bold mx-1'>
                {progressUpload}%
              </p>
              <FaRegTimesCircle
                className='cursor-pointer'
                onClick={() => cancelUpload()}
              />
            </div>
            <p className='whitespace-pre-wrap break-words'>{caption}</p>
          </React.Fragment>
        );
    }
  };
  return SwitchDocument();
};

export default DocumentProgress;
