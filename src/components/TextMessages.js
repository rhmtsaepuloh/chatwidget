import React from "react";
import { MdDoneAll } from "react-icons/md";
import { urlify } from "../utils/messages";

const TextMessages = ({ message, timestamp }) => {
  return (
    <React.Fragment>
      <p
        dangerouslySetInnerHTML={{
          __html: `<p style='white-space: pre-wrap;overflow-wrap: break-word;margin: 0.25rem;'>${urlify(
            message
          )}</p>`,
        }}
      />
      <div className='file-timestamp flex items-center justify-end'>
        <p className='text-sm' style={{ color: "#979797" }}>
          {timestamp}
        </p>
        <MdDoneAll className='ml-1' />
      </div>
    </React.Fragment>
  );
};

export default TextMessages;
