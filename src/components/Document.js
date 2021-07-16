/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { FaFilePdf, FaFileExcel, FaFileAlt } from "react-icons/fa";
import isEmpty from "lodash/isEmpty";
import { MdDoneAll, MdInsertDriveFile } from "react-icons/md";
import RenderDocument from "./RenderDocument";

const Document = ({
  extension,
  color,
  timestamp,
  text,
  size,
  caption,
  downloadFile,
}) => {
  const splitExtension = isEmpty(extension) ? null : extension.split(".").pop();

  const SwitchDocument = () => {
    switch (splitExtension) {
      case "pdf":
        return (
          <RenderDocument
            icon={<FaFilePdf style={{ color }} />}
            text={text}
            extension={extension}
            splitExtension={splitExtension}
            size={size}
            timestamp={timestamp}
            downloadFile={downloadFile}
            caption={caption}
          />
        );
      case "doc":
      case "docx":
        return (
          <RenderDocument
            icon={<MdInsertDriveFile style={{ color }} />}
            text={text}
            extension={extension}
            splitExtension={splitExtension}
            size={size}
            timestamp={timestamp}
            downloadFile={downloadFile}
            caption={caption}
          />
        );
      case "txt":
        return (
          <RenderDocument
            icon={<FaFileAlt style={{ color }} />}
            text={text}
            extension={extension}
            splitExtension={splitExtension}
            size={size}
            timestamp={timestamp}
            downloadFile={downloadFile}
            caption={caption}
          />
        );
      case "xls":
      case "xlsx":
        return (
          <RenderDocument
            icon={<FaFileExcel style={{ color }} />}
            text={text}
            extension={extension}
            splitExtension={splitExtension}
            size={size}
            timestamp={timestamp}
            downloadFile={downloadFile}
            caption={caption}
          />
        );
      default:
        return (
          <React.Fragment>
            <img
              src={extension}
              alt='image'
              className='h-56 w-full mb-2 rounded-md'
            />
            <p className='whitespace-pre-wrap break-words'>{caption}</p>
            <div className='file-timestamp flex items-center justify-end'>
              <p className='text-sm' style={{ color: "#979797" }}>
                {timestamp}
              </p>
              <MdDoneAll className='ml-1' />
            </div>
          </React.Fragment>
        );
    }
  };
  return SwitchDocument();
};

export default Document;
