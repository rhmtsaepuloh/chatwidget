import React from "react";
import { MdDoneAll } from "react-icons/md";
import { urlify } from "../utils/messages";

const ButtonMessages = ({ message, timestamp, item, onPostBack }) => {
  return (
    <React.Fragment>
      <div
        dangerouslySetInnerHTML={{
          __html: `<p style='white-space: pre-wrap;overflow-wrap: break-word;margin: 0.25rem;'>${urlify(
            message
          )}</p>`,
        }}
      />
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
              onClick={() =>
                onPostBack(el.label, el.payload, "button_postback_response")
              }
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
        <MdDoneAll className='ml-1' />
      </div>
    </React.Fragment>
  );
};

export default ButtonMessages;
